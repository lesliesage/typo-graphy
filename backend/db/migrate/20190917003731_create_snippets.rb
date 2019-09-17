class CreateSnippets < ActiveRecord::Migration[6.0]
  def change
    create_table :snippets do |t|
      t.text :code
      t.text :annotation
      t.integer :language_id

      t.timestamps
    end
  end
end
