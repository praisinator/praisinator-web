require 'json'
require 'active_support/core_ext/module/delegation'

module CFENV
  extend self

  delegate :to_hash, :[], to: :parsed

  private

  def parsed
    @parsed ||= (JSON.parse ENV['VCAP_SERVICES'] || '{}').values.flatten.map do |service|
      [service['name'], service['credentials']]
    end.to_h
    # rescue => e
    #   warn e
    #   {}
  end
end
