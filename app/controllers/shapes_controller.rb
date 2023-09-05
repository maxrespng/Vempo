class ShapesController < ApplicationController
  def index
  end

  def create
    @shape = Shape.new(shape_params)
    @shape.save
  end

  private

  def shape_params
    params.require(:shape).permit(:name, :start_x, :start_y, :width, :project_id, :height, :color)
  end
end
