class ApiController < ActionController::API
  
  def index
    @apis = Api.all
    render json: {staus: 200,data: @apis}
  end

  def show
    @api = Api.find(params[:id])
    render json: {staus: 200,data: @api}
  end

  def member_regist
    param = params.permit(:email, :password);
    print(param)
    @user = User.new(param)
    if @user.save
      render json: {staus: 200,data: @user}
    else
      render json: {staus: 200,data: {}}
    end
  end
end
