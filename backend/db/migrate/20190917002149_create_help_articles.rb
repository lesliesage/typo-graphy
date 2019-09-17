class CreateHelpArticles < ActiveRecord::Migration[6.0]
  def change
    create_table :help_articles do |t|
      t.text :help_text
      t.integer :display_order

      t.timestamps
    end
  end
end
