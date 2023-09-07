import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = [
    "p5Canvas", "container", "projectId", "formElement", "bottom", "close",
    "element", "arrow", 'bottomD', "microphone", "animation"
  ];
  static values = {
    // canvas: Object,
    // project: Object
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
            setTimeout(getAmplitudeData, 100); // here is to show the numer slowly

            let vol = averageAmplitude.getLevel();

            let mappedValue  = map(vol, 0, 255, 0, 200)
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

  // insertSetup() {
  //   const newScript = document.createElement("script");
  //   newScript.innerHTML = `setup() {
  //     const canvas = createCanvas(displayWidth,displayHeight);
  //     let mic = new p5.AudioIn();
  //     mic.start();
  //     canvas.parent('myCanvas')
  //     console.log('canvas');
  //   }`

  //   thisElement.appendChild(newScript);
  // }
}
