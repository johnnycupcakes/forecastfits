require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'Attributes' do
    it { is_expected.to respond_to :email }
    it { is_expected.to respond_to :encrypted_password }
  end

  describe 'Database' do
    it { is_expected.to have_db_column :email }
    it { is_expected.to have_db_column :encrypted_password }
  end
end
