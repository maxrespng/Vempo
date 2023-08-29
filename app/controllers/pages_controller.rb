class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :home ]

  def home
  end

  def testp5
  end

  def testproject
  end

  def testhome
  end
end
