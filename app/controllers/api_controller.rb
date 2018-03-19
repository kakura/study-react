class ApiController < ApplicationController
  def index
    @apis = Api.all
    render json: {staus: 200,data: @apis}
  end

  def show
    @api = Api.find(params[:id])
    render json: {staus: 200,data: @api}
  end
end
