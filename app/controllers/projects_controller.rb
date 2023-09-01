class ProjectsController < ApplicationController
  before_action :authenticate_user!, except: [:index]
  def index
    @projects = Project.all
  end

  def show
    @projects = Project.all
    @project = Project.find(params[:id])
    @shape = Shape.new
  end

  def create
    @project = Project.new
    @project.user = current_user
    @project.save!
    redirect_to project_path(@project)
  end
end
