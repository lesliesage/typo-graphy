class CreateResults < ActiveRecord::Migration[6.0]
  def change
    create_table :results do |t|
      t.integer :test_id
      t.float :alpha
      t.float :caps
      t.float :numeric
      t.float :tilde
      t.float :backtick
      t.float :exclamation
      t.float :at
      t.float :hash
      t.float :dollar
      t.float :percent
      t.float :carrot
      t.float :ampersand
      t.float :star
      t.float :open_paren
      t.float :close_paren
      t.float :long_dash
      t.float :dash
      t.float :plus
      t.float :equals
      t.float :open_curly
      t.float :close_curly
      t.float :open_bracket
      t.float :close_bracket
      t.float :pipe
      t.float :backslash
      t.float :colon
      t.float :semicolon
      t.float :doublequote
      t.float :singlequote
      t.float :open_angle
      t.float :close_angle
      t.float :comma
      t.float :period
      t.float :question
      t.float :slash

      t.timestamps
    end
  end
end
