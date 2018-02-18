class StudentsController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :set_student, only: [:show]

  def index

    @students = if params[:movie]
      Student.where('favoritemovie LIKE?', "%#{params[:movie]}%")
    else
      @students = Student.all
    end
    if request.headers["Accept"].include?('application/json') 
        render json: @students
    else
      @students
    end
  end

  
  def foo

    p params["valid"], params["valid"] == "true"
    if params["valid"] == "true"
      render :nothing => true
      response.body='BAR'
      response.status = 202 
    else
      raise 'error'
    end



  end

  def js
  end



  def show
  end



  private
    def student_params
      params.require(:student).permit(:firstname,
                                      :lastname,
                                      :favoritemovie,
                                      :favoritecolor,
                                      :favoritefood)
    end

    def set_student
      @student = Student.find(params[:id])
    end
end
