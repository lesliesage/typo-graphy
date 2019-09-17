class ChangeColumnName < ActiveRecord::Migration[6.0]
  def change
    rename_column :tests, :hash, :octothorpe
  end
end
