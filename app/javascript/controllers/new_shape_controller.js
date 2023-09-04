

import { Controller } from "@hotwired/stimulus"




export default class extends Controller {
  static targets = ["p5Canvas", "checkboxes", "checkbox", "input1", "input2", "input3", "input4", "colorPicker","container", "bottom","audio"]
  static values = {
    input: String
  }


  toggle(event) {

      // this one is to displey the side-bar
    console.log(this.checkboxesTarget);

  if (this.checkboxesTarget.style.display === "block") {
    this.checkboxesTarget.style.display = "none";
  } else {
    this.checkboxesTarget.style.display = "block";
  }
  }


  connect() {
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


          // // Calcula la media de los valores en el arreglo
          // const averageAmplitude = dataArray.reduce((acc, value) => acc + value, 0) / dataArray.length;

          // // Muestra la media en la consola
          // console.log("Media de amplitud:", averageAmplitude);

          // // Calcula el valor máximo en el arreglo
          // const maxAmplitude = Math.max(...dataArray);

          // // Muestra el valor máximo en la consola
          // console.log("Valor máximo de amplitud:", maxAmplitude);

          // requestAnimationFrame(getAmplitudeData);

            // setTimeout(() => {
            //   console.log(dataArray); // Aquí puedes trabajar con los datos de amplitud
            // }, 4);

            // requestAnimationFrame(getAmplitudeData);
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


  // getAmplitudeData() {
  //   // Obtiene datos de amplitud en tiempo real
  //   analyser.getByteFrequencyData(dataArray);

  //   // Ahora, dataArray contiene valores que representan la amplitud del audio
  //   // Puedes trabajar con estos valores según tus necesidades
  //   console.log(dataArray);

  //   // Llama a esta función de nuevo para obtener datos continuamente
  //   requestAnimationFrame(getAmplitudeData);
  // }



  // requestMicrophoneAccess() {
  //   let audioRecorder; // Variable global para el objeto MediaRecorder
  //   let audioBitsPerSecond = 128000; // Valor inicial de audioBitsPerSecond
  //   console.log('request microphone access')
  //   if (window.AudioContext || window.webkitAudioContext) {
  //     this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
  //     navigator.mediaDevices.getUserMedia({ audio: true })
  //       .then(stream => {
  //         const options = {
  //           audioBitsPerSecond: audioBitsPerSecond,

  //         };
  //         this.MediaRecorder = new MediaRecorder(stream, options);
  //         audioBitsPerSecond.getByteFrequencyData(dataArray);

  //         this.MediaRecorder.start()
  //         alert('"Microphone access granted successfully!"');
  //        // console.log("audioBitsPerSecond:", options.audioBitsPerSecond);
  //       })
  //       .catch(error => {
  //         console.error("Error accessing microphone:", error);
  //       });
  //   } else {
  //     console.error("AudioContext is not supported in this browser.");
  //    }

  // }

  // getAmplitudeData() {
  //   // Obtiene datos de amplitud en tiempo real
  //   analyser.getByteFrequencyData(dataArray);

  //   // Ahora, dataArray contiene valores que representan la amplitud del audio
  //   // Puedes trabajar con estos valores según tus necesidades
  //   console.log(dataArray);

  //   // Llama a esta función de nuevo para obtener datos continuamente
  //   requestAnimationFrame(getAmplitudeData);
  // }

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
      target =  target.parentElement;
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
    let name = ''
    mouse_x = parseInt(mouse_x, 10);
    mouse_y = parseInt(mouse_y, 10);
    if (this.userCanDraw) {

      const selectedColor = this.colorPickerTarget.value;
      if (this.shape === "triangle") {
        console.log("this is a triangle")
        triangle(mouse_x, mouse_y - 50, newMouse_x + 100, newMouse_y, mouse_x + 200, mouse_y);
        // trigger save/update method
        name = 'triangle'
      }
      else if (this.shape === "circle") {
        console.log("Circle");
        circle(mouse_x, mouse_y - 50, 55)
        // trigger save/update method
        name = 'circle'
      }
      else if (this.shape === "square") {
        square(mouse_x, mouse_y - 50, newMouse_x);
        // trigger save/update method
        name = 'square'

      }
      else if (this.shape === "oval") {
        ellipse(mouse_x, mouse_y - 50, newMouse_x);
        // trigger save/update method
        name = 'oval'
      }
      else if (this.shape === "rectangle") {
        rect(mouse_x, mouse_y - 50, newMouse_x - mouse_x, newMouse_y - mouse_y);
        // trigger save/update method
        name = 'rectangle'
        let shapeData = { name: name, start_x: mouse_x, start_y: mouse_y, width: newMouse_x - mouse_x, height: newMouse_y - mouse_y };
        console.log(shapeData);
        fill(selectedColor);
      }
      // const data = JSON.stringify

    }
  }
}




// write a save/update function below

// saveShape() {
//   fetch('url', {
//     fetch("https://jsonplaceholder.typicode.com/todos", {
//       method: "POST",
//       body: JSON.stringify({
//         userId: 1,
//         title: "Fix my bugs",
//         completed: false
//       }),
//       headers: {
//         "Content-type": "application/json; charset=UTF-8"
//       }
//     });
// }


// Today's task:
// 1. create form in sidebar to contain all the data for our shapes (start_x, start_y, etc.)
// 2. implement a mouseDown event listener that records the start_x and start_y of the shape
// 3. implement a mouseUp event listener that records the width and height values for our shape.
// 4. implement a save function and call it after every shape drawn.
