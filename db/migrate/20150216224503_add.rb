class Add < ActiveRecord::Migration
  def change
  	add_column :comments, :shoes, :string
  	add_column :comments, :pants, :string
  	add_column :comments, :jacket , :string
  	add_column :comments, :top, :string
  end
end
