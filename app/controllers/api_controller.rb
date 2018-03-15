class ApiController < ApplicationController
  def index
    @apis = Api.all
    render json: {staus: 200,data: @apis}
  end
end
