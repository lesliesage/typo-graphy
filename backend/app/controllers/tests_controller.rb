class TestsController < ApplicationController
    def index
        tests = Test.all
        render json: tests.to_json(test_serializer)
    end

    def create
        byebug
        test = Test.create(test_params)
        render json: test.to_json(test_serializer)
    end

    private

    def test_serializer 
        {:include => 
                [:snippet => {:include => 
                    {:language => {:only => [:id, :name]}},
                    :except => [:language_id, :create_at, :updated_at, :creator_id]
                }, 
                :user => {:only => [:id, :username]},
                ], 
            :except => [:user_id, :snippet_id, :updated_at]
        }
    end

    def test_params
        params.require(:test).permit(:user_id, :snippet_id, 
        :alpha, :numeric, :tilde, :backtick, :exclamation, :at, :octothorpe, :dollar, :percent, :carrot, :ampersand, :star, :open_paren, :close_paren, :long_dash, :dash, :plus, :equals, :open_curly, :close_curly, :open_bracket, :close_bracket, :pipe, :backslash, :colon, :semicolon, :doublequote, :singlequote, :open_angle, :close_angle, :comma, :period, :question, :slash)
    end
end
