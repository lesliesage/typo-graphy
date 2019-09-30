class User < ApplicationRecord
    has_many :tests
    has_many :bookmarks
    # has_many :snippets, foreign_key 'creator_id'
    has_many :snippets, through: :bookmarks
    has_secure_password
    validates :username, uniqueness: { case_sensitive: false }
end
