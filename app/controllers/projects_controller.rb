class ProjectsController < ApplicationController
  before_action :authenticate_user!, except: [:index]
  def index
    @projects = Project.all
  end

  def show
    @projects = Project.all
    @project = Project.find(params[:id])
    @shape = Shape.new
    @shapes = Shape.where(params[:project_id])
    # raise
  end

  def create
    @project = Project.new(project_params)
    @project.user = current_user
    if @project.save
      redirect_to project_path(@project), notice: 'Project was successfully created.'
    else

    end
  end

  # def get_shapes
  #   @shapes = Shape.where(params[:project_id])
  # end

  private

  def project_params
    params.require(:project).permit(:name, :audio_file)
  end
end
