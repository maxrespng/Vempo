
// import { Controller } from "@hotwired/stimulus"

// // Connects to data-controller="new-shape"
// export default class extends Controller {
//   static targets = ["p5Canvas", "checkbox", "checkboxes"]
//   connect() {
//     console.log("all connected!")
//   }


//  draw() {
//   this.checkboxesTarget.foreach
//   const checkbox = this.checkboxTarget
//   const shape = checkbox.dataset.shape
//   if (shape === "triangle") {
//     console.log("im a triangle")
//   }


// }
// }

import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["p5Canvas", "checkboxes", "checkbox"]

  connect() {
    console.log("all connected!");
    this.shape
    this.userCanDraw = false;
    // Agregar un evento click a cada checkbox
    // const checkboxes = this.checkboxesTarget.querySelectorAll('[data-shape]');
    // checkboxes.forEach(checkbox => {
    //   checkbox.addEventListener('click', this.handleCheckboxClick.bind(this));
    // });
  }

  handleCheckboxClick(event) {
    console.log(event.target)
    let target = event.target;
    console.log(this.checkboxTargets.indexOf(target))
    while (this.checkboxTargets.indexOf(target) == -1) {
      target =  target.parentElement;
      console.log(this.checkboxTargets.indexOf(target))
    }
    console.log("Found element")
    console.log(target)
    // const checkbox = event.currentTarget;
    this.shape = target.dataset.shape;
    this.userCanDraw = true;



  }

  draw(event) {
    if (this.userCanDraw) {
      console.log("drar");

      const mouse_x = event.clientX;
      const mouse_y = event.clientY;
      if (this.shape === "triangle") {
        //insert script tag with instructions for a triangle
        console.log("this is a triangle")
        triangle(mouse_x, mouse_y, mouse_x + 55, mouse_y + 55, mouse_x - 55, mouse_y - 55);
        // this.p5CanvasTarget.insertAdjacentHTML("beforeend","<script>triangle(x1, y1, x2, y2, x3, y3)</script>")
      }
      else if (this.shape === "circle") {
        //insert script tag with instructions for a square
        console.log("Circle");
        circle(mouse_x, mouse_y, 55)
        // trigger save/update method
      }
      else if (this.shape === "square") {
        //insert script tag with instructions for a square
        square(mouse_x, mouse_y, 55);
        // trigger save/update method

      }
      else if (this.shape === "oval") {
        //insert script tag with instructions for a square
        // trigger save/update method
        
        ellipse(mouse_x, mouse_y, 200, 150);
      }
      else if (this.shape === "rectangle") {
        //insert script tag with instructions for a square
        rect(mouse_x, mouse_y, 200, 55)
        // trigger save/update method

      }
      console.log(mouse_x);

    }
  }
}

// write a save/update function below





//  var checkbox = document.getElementById('flexCheckDefault-t');
//     var label = document.querySelector('label[for="' + checkbox.id + '"]').innerText;

//     console.log("Checkbox Label:", label);

// var checkbox = document.getElementById('flexCheckDefault-t');
// var label = document.querySelector('label[for="' + checkbox.id + '"]');
//  console.log(label);

// this.p5CanvasTarget.insertAdjacentHTML("beforeend","<script>triangle(x1, y1, x2, y2, x3, y3)</script>")
