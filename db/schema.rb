# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160221075834) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "channels", force: :cascade do |t|
    t.integer  "team_id",    null: false
    t.string   "slack_id",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "channels", ["slack_id"], name: "index_channels_on_slack_id", unique: true, using: :btree
  add_index "channels", ["team_id"], name: "index_channels_on_team_id", using: :btree

  create_table "messages", force: :cascade do |t|
    t.integer  "channel_id", null: false
    t.integer  "user_id",    null: false
    t.string   "slack_id"
    t.float    "timestamp"
    t.text     "content",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "messages", ["channel_id"], name: "index_messages_on_channel_id", using: :btree
  add_index "messages", ["user_id"], name: "index_messages_on_user_id", using: :btree

  create_table "teams", force: :cascade do |t|
    t.string   "slack_id",                       null: false
    t.string   "name"
    t.string   "slack_bot_id"
    t.string   "logo_url"
    t.string   "slack_bot_token"
    t.datetime "created_at",                     null: false
    t.datetime "updated_at",                     null: false
    t.boolean  "active",          default: true
  end

  add_index "teams", ["slack_id"], name: "index_teams_on_slack_id", unique: true, using: :btree

  create_table "tones", force: :cascade do |t|
    t.integer  "message_id",               null: false
    t.float    "emotional_anger"
    t.float    "emotional_disgust"
    t.float    "emotional_fear"
    t.float    "emotional_sadness"
    t.float    "writing_analytical"
    t.float    "writing_confident"
    t.float    "writing_tentative"
    t.float    "social_openness"
    t.float    "social_conscientiousness"
    t.float    "social_extraversion"
    t.float    "social_agreeableness"
    t.float    "social_neuroticism"
    t.datetime "created_at",               null: false
    t.datetime "updated_at",               null: false
    t.float    "emotional_joy"
  end

  add_index "tones", ["message_id"], name: "index_tones_on_message_id", using: :btree

  create_table "user_feedbacks", force: :cascade do |t|
    t.integer  "issuing_user_id", null: false
    t.integer  "issued_user_id",  null: false
    t.boolean  "positive",        null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  create_table "users", force: :cascade do |t|
    t.integer  "team_id",      null: false
    t.string   "slack_id",     null: false
    t.string   "access_token"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  add_index "users", ["slack_id"], name: "index_users_on_slack_id", unique: true, using: :btree
  add_index "users", ["team_id"], name: "index_users_on_team_id", using: :btree

  add_foreign_key "channels", "teams", on_delete: :cascade
  add_foreign_key "messages", "channels", on_delete: :cascade
  add_foreign_key "messages", "users", on_delete: :cascade
  add_foreign_key "tones", "messages", on_delete: :cascade
  add_foreign_key "user_feedbacks", "users", column: "issued_user_id", on_delete: :cascade
  add_foreign_key "user_feedbacks", "users", column: "issuing_user_id", on_delete: :cascade
  add_foreign_key "users", "teams", on_delete: :cascade
end
