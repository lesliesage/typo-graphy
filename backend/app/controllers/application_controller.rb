# require './.Secrets.rb'

# class ApplicationController < ActionController::Base
#     def encode(payload)
#         JWT.encode(payload, SECRET_KEY, ENCRYPTION_ALGORITHM)
#     end

#     def decode(token)
#         JWT.decode(token, SECRET_KEY, true, {algorithm: ENCRYPTION_ALGORITHM})[0]
#     end
# end

class ApplicationController < ActionController::Base
    # before_action :authorized

    def encode(payload)
        JWT.encode(payload, "s3cr3tK3yIsS3cr3t", 'HS512')
    end

    def decode(token)
        JWT.decode(token, "s3cr3tK3yIsS3cr3t", true, {algorithm: 'HS512'})[0]
    end
end