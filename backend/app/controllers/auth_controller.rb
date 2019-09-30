require 'jwt'
class AuthController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create # POST /login
    @user = User.find_by(username: params[:username])
    if @user && @user.authenticate(params[:password])
      #if user exists and password is a match
      token = encode({user_id: @user.id})
      render json: {
        authenticated: true,
        message: "logging in...",
        user: @user,
        token: token
      }, status: :accepted
    else
      #if user does not exist OR password not a match
      render json: {
        authenticated: false,
        message: "incorrect username or password"
      }, status: :unauthorized
    end
  end
end
