import { Controller } from "@hotwired/stimulus"
// import { userCanDraw } from "./new_shape_controller.js"

// Connects to data-controller="delete-shape"
export default class extends Controller {

  static targets = ["canvas"]
  static values = {
    allShapes: Array
  }

  connect() {
    this.userCanDelete = false;
    this.deleteArray = [];
  }

  canDelete() {
    this.userCanDelete = !this.userCanDelete;
    console.log(`user can delete = ${this.userCanDelete}`);
  }

  deleteShape(event) {
    // window.location.reload();
    if (this.userCanDelete) {
      console.log("triggered delete shape");
      const mouse_x = event.clientX;
      const mouse_y = event.clientY;
      console.log(this.allShapesValue);
      console.log(`x mouse - ${mouse_x}`)
      console.log(`y mouse - ${mouse_y}`)
      let range_x = this.range(mouse_x - 50, mouse_x +50);
      console.log(range_x);
      let range_y = this.range(mouse_y - 50, mouse_y + 50);
      console.log(range_y);
      this.allShapesValue.forEach((shape) => {
        if (range_x.includes(parseInt(shape.start_x, 10)) && range_y.includes(parseInt(shape.start_y, 10))) {
          console.log("within range")
          this.deleteArray.push(shape);
          console.log(this.deleteArray);
          // sort array by ascending shape.id value
          this.deleteArray.sort((a, b) => a.id - b.id);
          console.log(this.deleteArray);
          // delete .last shape
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

  range(start, end) {
    let ans = [];
    for (let i = start; i <= end; i++) {
        ans.push(i);
    }
    return ans;
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
