class ToneAnalyzerJob < ActiveJob::Base

  def perform(message)
    response  = connection.post(File.join(config.path, 'v3/tone')) do |req|
      req.params = {
        sentences: false,
        version:   '2016-02-11',
        tones:     %w{emotion writing social}
      }
      req.body   = { text: message.content }
    end
    tone_cats = response.body['document_tone']['tone_categories']

    attributes = {}
    tone_cats.find { |cat| cat['category_id'] == 'emotion_tone' }['tones'].each do |tone|
      attributes["emotional_#{tone['tone_id']}"] = tone['score']
    end

    tone_cats.find { |cat| cat['category_id'] == 'writing_tone' }['tones'].each do |tone|
      attributes["writing_#{tone['tone_id']}"] = tone['score']
    end

    tone_cats.find { |cat| cat['category_id'] == 'social_tone' }['tones'].each do |tone|
      attributes["social_#{tone['tone_id'].sub(/_big5$/, '')}"] = tone['score']
    end

    message.create_tone!(attributes)
  end

  private

  def connection
    @connection ||= Faraday.new(url: config.host) do |conn|
      conn.basic_auth config.username, config.password
      conn.request :json
      conn.response :json
      conn.adapter Faraday.default_adapter
    end
  end

  def config
    url = 'https://gateway.watsonplatform.net/tone-analyzer-beta/api'
    username = ENV['IBM_TONE_API_USER'] || CFENV['praisinator-tone-analyzer']['username']
    password = ENV['IBM_TONE_API_PASS'] || CFENV['praisinator-tone-analyzer']['password']
    OpenStruct.new(
      host: URI.parse(url).tap { |u| u.path = '/' }.to_s,
      path: URI.parse(url).path,
      username: username,
      password: password
    )
  end

end
