require 'rails_helper'

RSpec.describe Comment, type: :model do
  describe 'Attributes' do
    it { is_expected.to respond_to :commenter }
    it { is_expected.to respond_to :body }
    it { is_expected.to respond_to :shoes }
    it { is_expected.to respond_to :pants }
    it { is_expected.to respond_to :jacket }
    it { is_expected.to respond_to :top }
  end

  describe 'Database' do
    it { is_expected.to have_db_column :commenter }
    it { is_expected.to have_db_column :body }
    it { is_expected.to have_db_column :shoes }
    it { is_expected.to have_db_column :pants }
    it { is_expected.to have_db_column :jacket }
    it { is_expected.to have_db_column :top }
  end
end
