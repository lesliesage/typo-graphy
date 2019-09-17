# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_09_17_025855) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bookmarks", force: :cascade do |t|
    t.integer "user_id"
    t.integer "snippet_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "help_articles", force: :cascade do |t|
    t.text "help_text"
    t.integer "display_order"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "languages", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "snippets", force: :cascade do |t|
    t.text "code"
    t.text "annotation"
    t.integer "language_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "creator_id"
  end

  create_table "tests", force: :cascade do |t|
    t.integer "user_id"
    t.integer "snippet_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.float "alpha"
    t.float "numeric"
    t.float "tilde"
    t.float "backtick"
    t.float "exclamation"
    t.float "at"
    t.float "octothorpe"
    t.float "dollar"
    t.float "percent"
    t.float "carrot"
    t.float "ampersand"
    t.float "star"
    t.float "open_paren"
    t.float "close_paren"
    t.float "long_dash"
    t.float "dash"
    t.float "plus"
    t.float "equals"
    t.float "open_curly"
    t.float "close_curly"
    t.float "open_bracket"
    t.float "close_bracket"
    t.float "pipe"
    t.float "backslash"
    t.float "colon"
    t.float "semicolon"
    t.float "doublequote"
    t.float "singlequote"
    t.float "open_angle"
    t.float "close_angle"
    t.float "comma"
    t.float "period"
    t.float "question"
    t.float "slash"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
