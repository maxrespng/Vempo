import { Controller } from "@hotwired/stimulus"
// export { userCanDraw };

export default class extends Controller {

  static targets = ["p5Canvas","play", "checkboxes", "checkbox", "input1", "input2", "input3", "input4", "colorPicker",  "container", "projectId", "formElement","bottom","close","element","arrow", 'bottomD',"microphone","undoLastDrawing"]
  static values = {
    input: String,
    url: String,
  }


  close(event) {
    const bottomDElement = this.bottomDTarget;
    const currentRight = window.getComputedStyle(bottomDElement).getPropertyValue("right");
    const currentRightValue = parseInt(currentRight);

    if (currentRightValue === 0) {
      bottomDElement.style.right = "148px";
    } else {
      bottomDElement.style.right = "0px";

    }  console.log(close);
  }


  toggle(event) {
      // this one is to displey the side-bar
    console.log(this.checkboxesTarget);
    console.log(this.bottomDTarget)

    if (this.checkboxesTarget.style.display === "none") {
      console.log('hello checkbox')
      this.checkboxesTarget.style.display = "block";
      this.arrowTarget.classList.remove('fa-arrow-left')
      this.arrowTarget.classList.add('fa-arrow-right')

    } else {
      this.checkboxesTarget.style.display = "none";
      this.arrowTarget.classList.add('fa-arrow-left')
      this.arrowTarget.classList.remove('fa-arrow-right')
    }

    this.bottomDTarget.classList.toggle('move-right');

  }

  connect() {
    this.shape
    this.soundData
    this.userCanDraw = false;
  }

  cannotDraw(event) {
    this.userCanDraw = false;
  }


  requestMicrophoneAccess() {
    let audioRecorder;
    let audioBitsPerSecond = 127;
    let dataArray;

    console.log('Requesting microphone access');
    if (window.AudioContext || window.webkitAudioContext) {
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
      navigator.mediaDevices.getUserMedia({ audio: true })

      .then(stream => {
          const options = {
            audioBitsPerSecond: audioBitsPerSecond,
          };
          this.MediaRecorder = new MediaRecorder(stream, options);

          // to check the manitud
          const analyser = this.audioContext.createAnalyser();
          analyser.fftSize = 256; // make gigger
          const bufferLength = analyser.frequencyBinCount;
          dataArray = new Uint8Array(bufferLength);
            // console.log( analyser.fftSize)
          // conect the audio
        console.log(dataArray);

          const microphoneSource = this.audioContext.createMediaStreamSource(stream);
          microphoneSource.connect(analyser);
          console.log(analyser)

          this.MediaRecorder.ondataavailable = (event) => {
            // to use
            console.log(this.MediaRecorder)
          };

          this.MediaRecorder.onstop = () => {
            console.log("Recording stopped.");
          };

          this.MediaRecorder.start();
          alert("Microphone access granted successfully!");

          // get nthe number
          function getAmplitudeData() {
            analyser.getByteFrequencyData(dataArray);
            let averageAmplitude = dataArray.reduce((acc, value) => acc + value, 0) / dataArray.length;
            averageAmplitude = averageAmplitude.toFixed(2);
            console.log(averageAmplitude);
            setTimeout(getAmplitudeData, 300); // here is to show the numer slowly
            let mappedValue  = map(averageAmplitude, 0, 255, 0, 200)
            console.log("averageAmplitude:", averageAmplitude);
            console.log("mappedValue:", mappedValue);
          }
          // getting the time
          this.soundData = getAmplitudeData();
        })


        .catch(error => {
          console.error("Error accessing microphone:", error);
        });

    } else {
      console.error("AudioContext is not supported in this browser.");
    }
  }

  stopRecording() {
    console.log('stop recording')
    this.MediaRecorder.stream.getTracks()[0].stop()
    // this.MediaRecorder.stop()
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
    console.log(`--------------------------------`);
    console.log("mouseDown function triggered");
    const mouse_x = event.clientX;
    this.input1Target.value = mouse_x;
    const mouse_y = event.clientY;
    this.input2Target.value = mouse_y;
    console.log(`--------------------------------`);
    // this.p5CanvasTarget.dataset.action += " mouseup->new-shape#mouseUp"
  }

  mouseUp(event) {
    console.log('Mouse up!')
    const newMouse_x = event.clientX;
    this.input3Target.value = newMouse_x;
    const newMouse_y = event.clientY;
    this.input4Target.value = newMouse_y;
    this.mouse_x = parseInt(this.input1Target.value);
    this.mouse_y = parseInt(this.input2Target.value);
    this.newMouse_x = parseInt(this.input3Target.value);
    this.newMouse_y = parseInt(this.input4Target.value);
    this.draw();
  }

  draw() {
    let selectedColor = ''
    let name = ''

    // defualt fill color to be black:
    if (this.colorPickerTarget.value === null) {
      selectedColor = "#000000"
    } else {
      selectedColor = this.colorPickerTarget.value;
    }


    let colorBox = this.element.querySelector(".white-btn-c");
    colorBox.style.backgroundColor = selectedColor;
      fill(selectedColor);

      //drawing the shape:
    if (this.userCanDraw) {
      if (this.shape === "triangle") {
        triangle(this.mouse_x, this.mouse_y - 50, this.newMouse_x + 100, this.newMouse_y, this.mouse_x + 200, this.mouse_y);
        name = 'triangle'
        const stringMouseX = (this.mouse_x).toString();
        const stringMouseY = (this.mouse_y).toString();
        const triangle_x = (this.mouse_x + 200).toString();
        const triangle_y = stringMouseY;
        console.log(`triangle_x = ${triangle_x}`);
        // trigger save/update method:
        const shapeData =  JSON.stringify({
          name: name, start_x: stringMouseX, start_y: stringMouseY,
          width: this.newMouse_x, height: this.newMouse_y, triangle_x: triangle_x, triangle_y: triangle_y,
          project_id: this.projectIdTarget.value, color: selectedColor
        });
        this.saveShape(shapeData)
      }
      else if (this.shape === "circle") {
        circle(this.mouse_x, this.mouse_y - 50, this.newMouse_x - this.mouse_x);
        name = 'circle'
        // trigger save/update method:
        const shapeData =  JSON.stringify({
          name: name, start_x: this.mouse_x, start_y: this.mouse_y,
          width: this.newMouse_x,
          project_id: this.projectIdTarget.value, color: selectedColor
        });
        this.saveShape(shapeData)
      }
      else if (this.shape === "square") {
        square(this.mouse_x, this.mouse_y - 50, this.newMouse_x - this.mouse_x);
        name = 'square'
        // trigger save/update method:
        const shapeData =  JSON.stringify({
          name: name, start_x: this.mouse_x, start_y: this.mouse_y,
          width: this.newMouse_x, height: this.newMouse_y,
          project_id: this.projectIdTarget.value, color: selectedColor
        });
        this.saveShape(shapeData)

      }
      else if (this.shape === "oval") {
        ellipse(this.mouse_x, this.mouse_y - 50, this.newMouse_x - this.mouse_x, this.newMouse_y - this.mouse_y);
        name = 'oval'
        // trigger save/update method:
        const shapeData =  JSON.stringify({
          name: name, start_x: this.mouse_x, start_y: this.mouse_y,
          width: this.newMouse_x, height: this.newMouse_y,
          project_id: this.projectIdTarget.value, color: selectedColor
        });
        this.saveShape(shapeData)
      }
      else if (this.shape === "rectangle") {
        rect(this.mouse_x, this.mouse_y - 50, this.newMouse_x - this.mouse_x, this.newMouse_y - this.mouse_y);
        name = 'rectangle'
        // trigger save/update method:
        const shapeData =  JSON.stringify({
          name: name, start_x: this.mouse_x, start_y: this.mouse_y,
          width: this.newMouse_x, height: this.newMouse_y,
          project_id: this.projectIdTarget.value, color: selectedColor
        });
        this.saveShape(shapeData)
      }

      // this.p5CanvasTarget.dataset.action += " mousedown->new-shape#mouseDown"

    }
  }

  saveShape(shapeData) {
    const url = this.urlValue
    console.log(`shapeData = ${shapeData}`)
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
