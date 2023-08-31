class ShapesController < ApplicationController
  def create
    raise
    @shape = Shape.new(shape_params)
    if @shape.save
    else
      render status: :unprocessable_entity
    end
  end

  private

  def shape_params
    params.require(:shape).permit(:name)
  end
end
