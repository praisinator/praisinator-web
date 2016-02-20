module CFENV

  delegate :to_hash, :[], to: :parsed

  private

  def parsed
    @parsed ||= JSON.parse ENV['VCAP_SERVICES'].values.flatten.map do |service|
      [service['name'], service['credentials']]
    end.to_h
  end
end
