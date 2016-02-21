class ToneAnalyzerJob < ActiveJob::Base

  def process(message)
    response  = connnection.post do |req|
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
    @connection ||= Faraday.new(url: config.url) do |faraday|
      faraday.basic_auth config.username, config.password
      faraday.request :json
      faraday.response :json
      faraday.adapter Faraday.default_adapter
    end
  end

  def config
    url, username, password = CFENV['praisinator-tone-analyzer']&.values_at('url', 'username', 'password')
    OpenStruct.new(url: url, username: username, password: password)
  end

end
