class AddCreatorIdToSnippets < ActiveRecord::Migration[6.0]
  def change
    add_column :snippets, :creator_id, :integer
  end
end
