class ProjectsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create, :destroy]
  before_action :authenticate_user!, except: [:index]
  def index
    @projects = Project.all
    # added new project for our project forms
    @project = Project.new
  end

  def show
    @projects = Project.all
    @project = Project.find(params[:id])
    @shape = Shape.new
    @shapes = Shape.where(project_id: @project)
  end

  def create
    if params[:project]
      @project = Project.new(project_params)
    else
      @project = Project.new(has_mic: true)
    end
    @project.user = current_user
    if @project.save
      # @project.process_music_file(params[:project][:music_file])
      redirect_to project_path(@project), alert: "AutoSave is ON!"
    else
      render 'pages/home'
    end
  end

  def update
    @project = Project.find(params[:id])
    @project.update!(project_params)
    redirect_to project_path(@project)
    # @project.update(project_params)
    # @project.update(svg: params[:project][:svg])
    # respond_to do |format|
    # format.html { redirect_to project_path(@project) }
    # format.json # Follows the classic Rails flow and look for a create.json view
    # end
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

  # def update
  #   @project = Project.find(params[:id])
  #   @project.update(project_params)
  #   redirect_to project_path(@project)
  # end

  private

  def project_params
    params.require(:project).permit(:name, :description, :has_mic, :music_file, :svg, :other_attributes, :screenshot)
  end

#   def music
#     @project = Project.find(params[:id])
#     send_file @project.music_file.current_path
#   end

end
