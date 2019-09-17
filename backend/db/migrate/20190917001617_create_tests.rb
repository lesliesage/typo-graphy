class CreateTests < ActiveRecord::Migration[6.0]
  def change
    create_table :tests do |t|
      t.integer :user_id
      t.integer :snippet_id

      t.timestamps
    end
  end
end
