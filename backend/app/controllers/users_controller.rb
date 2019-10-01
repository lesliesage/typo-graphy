class UsersController < ApplicationController
  skip_before_action :verify_authenticity_token
  skip_before_action :authorized, only: [:create]

  def create
    @user = User.create({username: params[:username], email: params[:email], password: params[:password]})
    # @user = User.create(user_params) # why doesn't this work...
    if @user.valid? #
      @token = encode_token(user_id: @user.id) #
      render json: { user: @user.to_json(user_serializer), jwt: @token }, status: :created     
    else
      render json: { error: 'failed to create user' }, status: :not_acceptable #
    end
  end

  def show
    render json: User.find(decoded_token["user_id"]), status: :accepted
  end

  private

  def user_params
      params.require(:user).permit(:username, :email, :password) 
  end

  def user_serializer
    {:only => [:id, :username, :email]} 
  end
end
