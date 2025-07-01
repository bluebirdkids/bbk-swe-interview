class ApplicationController < ActionController::Base
  # Skip CSRF protection for API requests
  skip_before_action :verify_authenticity_token
end
