import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="delete-shape"
export default class extends Controller {

  static targets = ["canvas"]
  static values = {
    allShapes: Array
  }

  connect() {
    this.userCanDelete = false;
  }

  canDelete() {
    this.userCanDelete = !this.userCanDelete;
    console.log(this.userCanDelete);
  }

  deleteShape(event) {
    let deleteArray = [];
    if (this.userCanDelete) {
      console.log("triggered delete shape");
      const mouse_x = event.clientX;
      const mouse_y = event.clientY;
      console.log(this.allShapesValue);
      this.allShapesValue.forEach((shape) => {
        if (mouse_x >= shape.start_x && mouse_x <= shape.width) {
          if (mouse_y >= shape.start_y && mouse_y <= shape.height) {
            deleteArray.push(shape);
            console.log(deleteArray);
            // delete the item in the deleteArray that has the highest id (in front) & delete from DB!
            deleteArray.sort((a, b) => a.id - b.id);
            deleteArray.splice(-1, 1);
            // refresh page
          }
        }
      });

      //0.5 use client_x, client_y to work out where the click happened
      //1 find the area of the shape that was clicked on
      //1.5 iterate through all the shapes
      //1.6 push all shapes that fit between the x and the y co-ords into an array
      //1.7 order by id
      //1.75 remove the .last item in the array (will be the top shape within the clicked area)
      //2 implement a delete request to the DB
      //3 refresh the page

      // findArea(shapeData);
    }
  }

  findArea(shapeData) {
    let area = ''
    if (shapeData.name === "triangle") {
      // area of a triangle calculation
      // 1/2 * (x1(y2 - y3) + x2(y3 - y1) + x3(y1 - y2))
      area = 0.5 * ( shapeData.start_x * (shapeData.height - y3) + shapeData.width * (y3 - shapeData.start_y) + x3(shapeData.start_y - y2))
    }
    if (shapeData.name === "circle") {
      // area of a circle calculation
      // pi * r^2
      area = Math.PI * ((shapeData.width / 2)(shapeData.width / 2))
    }
    if (shapeData.name === "square") {
      // area of a square calculation
      area = shapeData.width * shapeData.width;
    }
    if (shapeData.name === "oval") {
      // area of a oval calculation
    }
    if (shapeData.name === "rectangle") {
      // area of a rectangle calculation
      area = shapeData.width * shapeData.length;
    }
    console.log(area);
    return area;
  }
}
