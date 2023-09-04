
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {


  static targets = ["p5Canvas", "checkboxes", "checkbox", "input1", "input2", "input3", "input4", "colorPicker",  "container", "projectId", "formElement","bottom","audio","close","element","arrow", 'bottomD']
  static values = {
    input: String,
    url: String
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
    console.log({ url: this.urlValue })

    this.shape
    this.soundData
    this.userCanDraw = false;
    // this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    // navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
    //   this.microphoneInput = this.audioContext.createMediaStreamSource(stream);
    // });

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
            // console.log(dataArray); // this code we get the vipes
            requestAnimationFrame(getAmplitudeData);

          let averageAmplitude = dataArray.reduce((acc, value) => acc + value, 0) / dataArray.length;

          console.log(averageAmplitude)
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
