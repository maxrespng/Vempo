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


function draw() {
    background(320);
    var vol = mic.getLevel();
  
    var centerY = height / 2;
    var squareSize = map(vol, 0.1, 0.3, 10, 100);
    var frequency = 1322; // go fast
  
    // Calculate square vertices
    var x1 = width / 2 - squareSize / 2;
    var y1 = centerY - squareSize / 2;
    var x2 = x1 + squareSize;
    var y2 = y1;
    var x3 = x2;
    var y3 = y1 + squareSize;
    var x4 = x1;
    var y4 = y3;
  
    yPositions.push(squareSize * sin(frequency * frameCount));
    if (yPositions.length > width) {
      yPositions.shift();
    }
    
    fill(255, 100, 30); // Color rojo 
    stroke(255, 0, 0); // Cambiar a color rojo
    beginShape();
    vertex(x1, y1);
    vertex(x2, y2);
    vertex(x3, y3);
    vertex(x4, y4); // Agregar un cuarto vértice
    endShape(CLOSE);
  
    drawAdditionalButtons();
  }
  
  
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




  songSelect = createSelect(); // Menú desplegable para seleccionar canción
  songSelect.position(850, height + 210);
  for (let i = 0; i < songNames.length; i++) {
    songSelect.option(songNames[i]);
  }
 
  playButton = createButton('Play');
  playButton.position(1000, height + 210);
  playButton.mousePressed(playSong);
  
  stopButton = createButton('Stop'); // Crear el botón de detener
  stopButton.position(1000, height + 240); // Posición del botón
  stopButton.mousePressed(stopSong); 

  captureButton = createButton('restar');
  captureButton.position(200, height + 270);
  captureButton.mousePressed(touchStarted);
  
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




function touchStarted() {
  getAudioContext().resume()
}

function restartAudio() {
  if (mySound[currentSong].isPlaying()) {
    mySound[currentSong].stop();
  }
  mySound[currentSong].play();
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

function touchStarted() {
  getAudioContext().resume()
}


function stopSong() {
  if (mySound[currentSong].isPlaying()) {
    mySound[currentSong].stop(); // Detener la canción actual si está reproduciéndose
  }
}

function drawAdditionalButtons() {
  let additionalButton1 = select('#additionalButton1');
  let additionalButton2 = select('#additionalButton2');
  let additionalButton3 = select('#additionalButton3'); // Nuevo botón
  
  if (additionalButtonsVisible) {
      if (additionalButton1) {
          additionalButton1.remove();
      }
      if (additionalButton2) {
          additionalButton2.remove();
      }
      if (additionalButton3) { // Remover el tercer botón
          additionalButton3.remove();
      }
  } else {
      if (!additionalButton1) {
          additionalButton1 = createButton('1');
          additionalButton1.position(1090, height + 80);
          additionalButton1.mousePressed(function() {
              console.log('Botón 1 presionado');
              window.location.href = 'prueba.html'; 
          });
          additionalButton1.id('additionalButton1');

          var img = createElement('img');
          img.attribute('src', 'img/c.jpeg'); // Cambiar la ruta de la imagen
          img.parent(additionalButton1);
          img.style('width', '50px');
          img.style('height', 'auto');
      }
      if (!additionalButton2) {
        additionalButton1 = createButton('1');
        additionalButton1.position(1090, height + 130);
        additionalButton1.mousePressed(function() {
            console.log('Botón 1 presionado');
            window.location.href = 'prueba.html'; 
        });
        additionalButton1.id('additionalButton1');

        var img = createElement('img');
        img.attribute('src', 'img/c.jpeg'); // Cambiar la ruta de la imagen
        img.parent(additionalButton1);
        img.style('width', '50px');
        img.style('height', 'auto');
    }
      if (!additionalButton3) {
        additionalButton1 = createButton('2');
        additionalButton1.position(1090, height +1);
        additionalButton1.mousePressed(function() {
            console.log('Botón 1 presionado');
            window.location.href = 'prueba.html'; 
        });
        additionalButton1.id('additionalButton1');

        var img = createElement('img');
        img.attribute('src', 'img/c.jpeg'); // Cambiar la ruta de la imagen
        img.parent(additionalButton1);
        img.style('width', '50px');
        img.style('height', 'auto');
    }
     
     }
}
