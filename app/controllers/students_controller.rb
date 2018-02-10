class StudentsController < ApplicationController
  def index
    @students = Student.all
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
end
