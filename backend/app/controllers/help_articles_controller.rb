class HelpArticlesController < ApplicationController
    skip_before_action :verify_authenticity_token
    skip_before_action :authorized
    
    def index
        help_articles = HelpArticle.all
        render json: help_articles.to_json(help_serializer)
    end

    private

    def help_serializer
        {:except => [:created_at, :updated_at]}
    end
end
