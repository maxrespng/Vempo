class ShapesController < ApplicationController
  def index
  end

  def create
    @shape = Shape.new(shape_params)
    @shape.save
  end

  def destroy
    @shape = Shape.find(params[:id])
    @shape.destroy
  end

  private

  def shape_params
    params.require(:shape).permit(:name, :start_x, :start_y, :width, :project_id, :height, :color, :triangle_x, :triangle_y)
  end
end
