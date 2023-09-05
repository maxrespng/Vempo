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
      @project.process_music_file(params[:project][:music_file])
      redirect_to project_path(@project)
    else
      render 'pages/home'
    end
  end

  def update
    @project = Project.find(params[:id])
    @project.update!(project_params)
    # @project.update(svg: params[:project][:svg])

    respond_to do |format|
      format.html { redirect_to project_path(@project) }
      format.json # Follows the classic Rails flow and look for a create.json view
    end
  end

  def destroy
    @project = Project.find(params[:id])

    if @project.destroy
      flash[:success] = "Project deleted successfully."
    else
      flash[:error] = "Failed to delete project."
    end
    redirect_to root_path
  end

  private

  def project_params
    params.require(:project).permit(:name, :description, :has_mic, :music_file, :other_attributes, :screenshot)
  end

  def music
    @project = Project.find(params[:id])
    send_file @project.music_file.current_path
  end

  # def update
  #   @project = Project.find(params[:id])
  #   @project.update(project_params)
  #   redirect_to project_path(@project)
  # end

  # def project_params
  #   params.require(:project).permit(:photo)
  # end
end
