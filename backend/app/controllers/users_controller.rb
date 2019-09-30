require 'jwt'
class UsersController < ApplicationController
    # skip_before_action :verify_authenticity_token

    def show
      token = request.headers["Authentication"].split(" ")[1]
      user = User.find(decode(token)["user_id"])
      render json: {
          authenticated: true,
          message: "logging in...",
          user: user,
          # user: user.to_json(user_serializer),
          token: token
      }, status: :accepted
    end

    def create
        user = User.create(user_params)
        if @user.valid?
          render json: { user: UserSerializer.new(user) }, status: :created
        else
          render json: { error: 'failed to create user' }, status: :not_acceptable
        end
      end

    private

    def user_params
        params.require(:user).permit(:username, :email, :password) 
    end

    def user_serializer
      {
        :only => [:id, :username, :email]
      }
    end

end
