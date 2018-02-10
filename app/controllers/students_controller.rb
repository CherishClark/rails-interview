class StudentsController < ApplicationController
  before_action :set_post, only: [:show]

  def index

    @students = if params[:movie]
      Student.where('favoritemovie LIKE?', "%#{params[:movie]}%")
    else
      @students = Student.all
    end

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
