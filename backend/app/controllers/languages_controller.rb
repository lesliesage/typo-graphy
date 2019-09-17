class LanguagesController < ApplicationController
    def index
        languages = Language.all
        render json: languages.to_json(language_serializer)
    end

    private

    def language_serializer
        {:except => [:created_at, :updated_at]}
    end
end
