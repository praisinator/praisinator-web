class BotApi < JSONAPIonify::Api::Base

  # Resource Helpers
  helper :update_instance do |context|
    unless context.instance.update context.request_attributes
      write_attribute_errors(context.instance.errors)
    end
    context.instance
  end
  helper(:create_instance) { |c| update_instance c }

  helper :remove_items_from_relationship do |context|
    context.request_instances.each { |instance| context.scope.delete(instance) }
    context.request_instances.each { |instance| instance.save if instance.changed? }
  end

  helper :add_items_to_relationship do |context|
    context.scope.concat context.request_instances
    context.request_instances.each { |instance| instance.save if instance.changed? }
  end

  helper :destroy_instance do |context|
    context.instance.destroy
  end

end
