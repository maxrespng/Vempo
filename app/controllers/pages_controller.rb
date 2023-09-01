class PagesController < ApplicationController
  # skip_before_action :authenticate_user!, only: [:home]
  # before_action :authenticate_user!, except: [:home]

  def index
  end

  def home
    @projects = Project.all
  end

  def testpfive
    @projects = Project.all
    @project = Project.find(params[:id])
    @shape = Shape.new
  end

  def testproject
  end

  def testhome
    @projects = Project.all
  end
end
