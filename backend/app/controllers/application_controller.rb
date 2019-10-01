require './.Secrets.rb'

class ApplicationController < ActionController::Base
    before_action :authorized

    def encode_token(payload)
        JWT.encode(payload, SECRET_KEY, ENCRYPTION_ALGORITHM)
    end
 
    def auth_header
        # { Authentication: 'Bearer <token>' }
        request.headers['Authentication']
    end
    
    def decoded_token
        if auth_header
            token = auth_header.split(' ')[1]
            # header: { 'Authentication': 'Bearer <token>' }
            JWT.decode(token, SECRET_KEY, true, {algorithm: ENCRYPTION_ALGORITHM})[0]
        else
            byebug
        end
    end
    
    def current_user
        if decoded_token
            user_id = decoded_token['user_id']
            @user = User.find_by(id: user_id)
        end
    end
    
    def logged_in?
        !!current_user
    end
    
    def authorized
        render json: { message: 'Please log in' }, status: :unauthorized unless logged_in?
    end
end