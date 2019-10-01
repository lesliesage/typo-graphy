class SnippetsController < ApplicationController
    skip_before_action :authorized, only: [:queue] #

    def index
        snippets = Snippet.all
        render json: snippets.to_json(snippet_serializer)
    end

    def queue
        snippet_queue = Snippet.all.shuffle
        render json: snippet_queue.to_json(snippet_serializer)
    end

    private

    def snippet_serializer
        {:except => [:created_at, :updated_at]}
    end
end
