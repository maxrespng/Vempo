class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :home ]

  def home
  end

  def testpfive
  end

  def testproject
  end

  def testhome
  end
end
