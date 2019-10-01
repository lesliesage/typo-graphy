class User < ApplicationRecord
    has_many :tests
    has_many :bookmarks
    # has_many :snippets, foreign_key 'creator_id'
    has_many :snippets, through: :bookmarks
    validates :username, uniqueness: { case_sensitive: false }
    has_secure_password
end
