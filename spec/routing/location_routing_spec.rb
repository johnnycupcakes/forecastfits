require "rails_helper"

RSpec.describe LocationController, type: :routing do
  it 'routes the root path to the index action' do
    expect(get('/')).to route_to('location#search')
  end
end
