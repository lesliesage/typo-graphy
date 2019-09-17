class UsersController < ApplicationController

    def create
        user = user.create(user_params)
        render json: user.to_json(user_serializer)
    end

    private

    def user_params
        params.require(:user).permit(:username, :email, :password) 
    end
end
