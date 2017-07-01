class StudentsController < ApplicationController
  def index
    if current_user
      @students = Student.all
    end
    render json: @students
  end

  def create
  end

  def update
  end

  def destroy
  end
end
