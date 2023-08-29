class ProjectsController < ApplicationController
  before_action :authenticate_user!, except: [:index]
  def index
    @projects = Project.all
  end

  def show
    @project = Project.find(params[:id])
  end
end
