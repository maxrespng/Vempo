var mic;
var yPositions = [];
var captureButton;
let mySound;
let playButton;
let changeSongButton;
let songSelect;
let goToPageButton;
let editorToolsButton;
let additionalButtonsVisible = true;
let currentSong = 0;
let stopButton;
var songNames = ['success-1-6297.mp3', 'sam.mp3','1.mp3'];

function preload() {
  mySound = [];
  for (let i = 0; i < songNames.length; i++) {
    mySound[i] = loadSound(songNames[i]);
  }
}

function setup() {
  createCanvas(500, 300);
  mic = new p5.AudioIn();
  mic.start();

  playButton = createButton('Play');
  playButton.position(1000, height + 210);
  playButton.mousePressed(playSong);

  stopButton = createButton('Stop'); // Crear el botón de detener
  stopButton.position(1000, height + 240); // Posición del botón
  stopButton.mousePressed(stopSong);

  songSelect = createSelect(); // Menú desplegable para seleccionar canción
  songSelect.position(850, height + 210);
  for (let i = 0; i < songNames.length; i++) {
    songSelect.option(songNames[i]);
  }


  captureButton = createButton('Save');
  captureButton.position(200, height + 210);
  captureButton.mousePressed(saveScreenshot);

  goToPageButton = createButton('Go to Other Page');
  goToPageButton.position(10, height - 270);
  goToPageButton.mousePressed(goToOtherPage);

  editorToolsButton = createButton('Editor Tools');
  editorToolsButton.position(1060, height + 210);
  editorToolsButton.mousePressed(toggleAdditionalButtons);
}

function draw() {
  background(30);
  var vol = mic.getLevel();

  var centerY = height / 2;
  var waveHeight = map(vol, 0, 0.4, 10, 100);
  var frequency = 6;

  yPositions.push(waveHeight * sin(frequency * frameCount));

  if (yPositions.length > width) {
    yPositions.shift();
  }

  noFill();
  stroke(255);
  beginShape();
  for (var i = 0; i < yPositions.length; i++) {
    var x = width - i;
    var y = centerY + yPositions[i];
    vertex(x, y);
  }
  endShape();

  drawAdditionalButtons();
}

function playSong() {
  let selectedSong = songSelect.value();
  let songIndex = songNames.indexOf(selectedSong);
  if (songIndex !== -1) {
    currentSong = songIndex;
    if (!mySound[currentSong].isPlaying()) {
      mySound[currentSong].play();
    }
  }
}

function changeSong() {
  currentSong = (currentSong + 1) % mySound.length;
  if (mySound[currentSong].isPlaying()) {
    mySound[currentSong].stop();
  }
}

function touchStarted() {
  getAudioContext().resume();
}

function goToOtherPage() {
  window.location.href = 'index.html';
}

function toggleAdditionalButtons() {
  additionalButtonsVisible = !additionalButtonsVisible;

  if (!additionalButtonsVisible) {
    removeAdditionalButtons();
  }
}

window.onload = function() {
  var context = new AudioContext();
}

function saveScreenshot() {
  saveCanvas('captura', 'png');
}



function stopSong() {
  if (mySound[currentSong].isPlaying()) {
    mySound[currentSong].stop(); // Detener la canción actual si está reproduciéndose
  }
}

  function drawAdditionalButtons() {
    let additionalButton1 = select('#additionalButton1');
    let additionalButton2 = select('#additionalButton2');

    if (additionalButtonsVisible) {
      if (additionalButton1) {
        additionalButton1.remove();
      }
      if (additionalButton2) {
        additionalButton2.remove();
      }
    } else {

      if (!additionalButton1) {
        additionalButton1 = createButton('triangulo');
        additionalButton1.position(1060, height + 180);
        additionalButton1.mousePressed(function() {
          console.log('Botón 1 presionado');
          window.location.href = 'index.html';
        });
        additionalButton1.id('additionalButton1');
      }

      if (!additionalButton2) {
        additionalButton2 = createButton('Button 2');
        additionalButton2.position(1060, height + 150);
        additionalButton2.mousePressed(function() {
          console.log('Botón 2 presionado');
        });
        additionalButton2.id('additionalButton2');
      }
      if (!additionalButton2) {
        additionalButton1 = createButton('prueba');
        additionalButton1.position(1090, height +1);
        additionalButton1.mousePressed(function() {
            console.log('Botón 1 presionado');
            window.location.href = 'prueba.html';
        });
        additionalButton1.id('additionalButton1');

        var img = createElement('img');
        img.attribute('src', 'img/cr.png'); // Cambiar la ruta de la imagen
        img.parent(additionalButton1);
        img.style('width', '50px');
        img.style('height', 'auto');
      }

    }

}
