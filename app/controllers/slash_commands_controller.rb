class SlashCommandsController < ApplicationController

  def create
    bot_token = Team.find_by!(slack_id: params[:team_id]).slack_bot_token

    conn = Faraday.new(:url => 'https://slack.com/api') do |faraday|
      faraday.request  :url_encoded             # form-encode POST params
      faraday.response :logger                  # log requests to STDOUT
      faraday.adapter  Faraday.default_adapter  # make requests with Net::HTTP
    end

    response  = conn.get("users.list?token=#{bot_token}")
    user_list = JSON.parse(response.body)['members']

    recipient_name = params[:text].gsub('@', '')
    recipient      = user_list.find { |user| user['name'] == recipient_name }

    if recipient.present?
      recipient_user_id = recipient['id']
      issuer_user_id    = params['user_id']
      issuer            = User.find_by(slack_id: issuer_user_id)
      recipient         = User.find_by(slack_id: recipient_user_id)
      if issuer.present? && recipient.present?
        positive          = params[:command] == '/praise' ? true : false
        UserFeedback.create(issuing_user: issuer, issued_user: recipient, positive: positive)
      end
    end

    return head :no_content
  end

end
