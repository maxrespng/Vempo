import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="play"
export default class extends Controller {


  static targets = ["playSong","play"]
  connect() {


    this.audio = new Audio('/musical100.mp3');
    // this.audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
  }





//   playlist = {
//     'song_1' : '/songs/musical100.mp3',
//     'song_2' : 'audio/saw.mp3',
//     'song_3' : 'audio/marbles.mp3',
//     'song_4' : 'audio/seagulls.mp3',
//     'song_5' : 'audio/plane.mp3'
// }

  play() {

    console.log("playyyy");
    this.audio.play();
  }


  pause(){
    console.log("pause")
    this.audio.pause();
  }

}
