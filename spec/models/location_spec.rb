require 'rails_helper'

RSpec.describe Location, type: :model do
  describe 'Attributes' do
    it { is_expected.to respond_to :city }
    it { is_expected.to respond_to :state }
  end

  describe 'Database' do
    it { is_expected.to have_db_column :city }
    it { is_expected.to have_db_column :state }
  end
  describe 'Validations' do
    it { is_expected.to validate_presence_of :city }
    it { is_expected.to validate_presence_of :state }
  end
end
