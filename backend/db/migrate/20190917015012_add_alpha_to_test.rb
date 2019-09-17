class AddAlphaToTest < ActiveRecord::Migration[6.0]
  def change
    add_column :tests, :alpha, :float
    add_column :tests, :numeric, :float
    add_column :tests, :tilde, :float
    add_column :tests, :backtick, :float
    add_column :tests, :exclamation, :float
    add_column :tests, :at, :float
    add_column :tests, :hash, :float
    add_column :tests, :dollar, :float
    add_column :tests, :percent, :float
    add_column :tests, :carrot, :float
    add_column :tests, :ampersand, :float
    add_column :tests, :star, :float
    add_column :tests, :open_paren, :float
    add_column :tests, :close_paren, :float
    add_column :tests, :long_dash, :float
    add_column :tests, :dash, :float
    add_column :tests, :plus, :float
    add_column :tests, :equals, :float
    add_column :tests, :open_curly, :float
    add_column :tests, :close_curly, :float
    add_column :tests, :open_bracket, :float
    add_column :tests, :close_bracket, :float
    add_column :tests, :pipe, :float
    add_column :tests, :backslash, :float
    add_column :tests, :colon, :float
    add_column :tests, :semicolon, :float
    add_column :tests, :doublequote, :float
    add_column :tests, :singlequote, :float
    add_column :tests, :open_angle, :float
    add_column :tests, :close_angle, :float
    add_column :tests, :comma, :float
    add_column :tests, :period, :float
    add_column :tests, :question, :float
    add_column :tests, :slash, :float
  end
end
