require 'jwt'
require 'byebug'
class UsersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def show
    token = request.headers["Authentication"]
    render json: User.find(decode(token)["user_id"]), status: :accepted
  end

  def create
    user = User.create({username: params[:username], email: params[:email], password: params[:password]})
    token = encode(user_id: user.id)
    render json: {
      authenticated: true,
      message: "logging in...",
      user: user.to_json(user_serializer),
      token: token
    }, status: :accepted
  end

  private

  def user_params
      params.require(:user).permit(:username, :email, :password) 
  end

  def user_serializer
    {:except => [:created_at, :updated_at]}
  end

end
