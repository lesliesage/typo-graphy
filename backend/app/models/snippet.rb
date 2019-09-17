class Snippet < ApplicationRecord
    # blongs_to :user, foreign_key: 'creator_id'
    belongs_to :language
    has_many :bookmarks
    has_many :tests
    has_many :users, through: :bookmarks
end
