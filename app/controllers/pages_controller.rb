class PagesController < ApplicationController
  # skip_before_action :authenticate_user!, only: [:home]
  # before_action :authenticate_user!, except: [:home]

  def index
  end

  def testpfive
  end

  def testproject
  end

  def testhome
    @projects = Project.all
  end
end
