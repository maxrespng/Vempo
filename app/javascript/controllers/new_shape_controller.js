import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["p5Canvas", "checkboxes", "checkbox", "input1", "input2", "input3", "input4", "colorPicker", "projectId", "formElement"]
  static values = {
    input: String,
    url: String
  }

  connect() {
    console.log({ url: this.urlValue })

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
      target = target.parentElement;
      console.log(this.checkboxTargets.indexOf(target))
    }
    console.log("Found element")
    console.log(target)
    // const checkbox = event.currentTarget;
    this.shape = target.dataset.shape;
    this.userCanDraw = true;



  }

  mouseDown(event) {
    // use the form inout target
    // change the value of the form input to mouse x and mouse y
    console.log("mouseDown function triggered");
    let mouse_x = event.clientX;
    console.log(`mouse_x - ${mouse_x}`);
    let mouse_y = event.clientY;
    console.log(`mouse_y - ${mouse_y}`);
    this.input1Target.value = mouse_x;
    console.log(`input1Target.value - ${mouse_x}`);
    this.input2Target.value = mouse_y;
    console.log(`input2Target.value - ${mouse_y}`);
    console.log(`--------------------------------`);
    // this.p5CanvasTarget.addEventListener('mouseup', (event1) => {
    //   console.log('Mouse up!')
    //   const newMouse_x = event1.clientX;
    //   const newMouse_y = event1.clientY;
    //   this.input3Target.value = newMouse_x;
    //   console.log(`input3Target.value - ${newMouse_x}`);
    //   this.input4Target.value = newMouse_y;
    //   console.log(`input4Target.value - ${newMouse_y}`);
    //   console.log(`--------------------------------`);
    //   this.draw(mouse_x, mouse_y, newMouse_x, newMouse_y);
    // })
  }

  mouseUp(event) {
    console.log('Mouse up!')
    const newMouse_x = event.clientX;
    const newMouse_y = event.clientY;
    this.input3Target.value = newMouse_x;
    console.log(`input3Target.value - ${newMouse_x}`);
    this.input4Target.value = newMouse_y;
    console.log(`input4Target.value - ${newMouse_y}`);
    console.log(`--------------------------------`);
    console.log(this.input1Target.value, this.input2Target.value, newMouse_x, newMouse_y);
    this.draw(this.input1Target.value, this.input2Target.value, newMouse_x, newMouse_y);
  }

  draw(mouse_x, mouse_y, newMouse_x, newMouse_y) {
    console.log('firing draw')
    let name = ''
    // mouse_x = parseInt(mouse_x, 10);
    // mouse_y = parseInt(mouse_y, 10);
    if (this.userCanDraw) {
      const selectedColor = this.colorPickerTarget.value;
      if (this.shape === "triangle") {
        console.log("this is a triangle")
        fill(selectedColor);
        triangle(mouse_x, mouse_y - 50, newMouse_x + 100, newMouse_y, mouse_x + 200, mouse_y);
        // trigger save/update method
        name = 'triangle'
      }
      else if (this.shape === "circle") {
        console.log("Circle");
        fill(selectedColor);
        circle(mouse_x, mouse_y - 50, 55)
        // trigger save/update method
        name = 'circle'
      }
      else if (this.shape === "square") {
        fill(selectedColor);
        square(mouse_x, mouse_y - 50, newMouse_x);
        // trigger save/update method
        name = 'square'

      }
      else if (this.shape === "oval") {
        fill(selectedColor);
        ellipse(mouse_x, mouse_y - 50, newMouse_x - mouse_x);
        // trigger save/update method
        name = 'oval'
      }
      else if (this.shape === "rectangle") {
        fill(selectedColor);
        rect(mouse_x, mouse_y - 50, newMouse_x - mouse_x, newMouse_y - mouse_y);
        // trigger save/update method
        name = 'rectangle'
        const shapeData =  JSON.stringify({
          name: name, start_x: mouse_x, start_y: mouse_y, width: newMouse_x.toString(), height: newMouse_y.toString(), project_id: this.projectIdTarget.value
        });
        this.saveShape(shapeData)
      }

    }
  }

  saveShape(shapeData) {
    const url = this.urlValue
    console.log(shapeData)
    const csrf = document.querySelector("meta[name='csrf-token']").content

    fetch(this.formElementTarget.action, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrf,
        'Accept': 'application/json'
      },
      body: shapeData
    });
  }
}

// write a save/update function below




// Today's task (31/08/2023):
// 1. create form in sidebar to contain all the data for our shapes (start_x, start_y, etc.)
// 2. implement a mouseDown event listener that records the start_x and start_y of the shape
// 3. implement a mouseUp event listener that records the width and height values for our shape.
// 4. implement a save function and call it after every shape drawn.
