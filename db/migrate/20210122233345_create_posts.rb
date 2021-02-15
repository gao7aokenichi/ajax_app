class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.text :content
      #マイグレーションを編集
      t.boolean :checked
      t.timestamps
    end
  end
end