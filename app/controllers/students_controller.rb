class StudentsController < ApplicationController
  def index
    @students = Student.all
    render json: @students
  end

  def create
  end

  def update
  end

  def destroy
  end
end
