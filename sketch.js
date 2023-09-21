let videos = [];
let currentVideoIndex = -1;

function preload() {
  for (let i = 1; i <= 5; i++) {
    videos[i] = createVideo(i + '.mov');
    videos[i].hide();
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  for (let i = 1; i <= 5; i++) {
    videos[i].size(width, height);
    videos[i].stop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
}

function playVideo(index) {
  for (let i = 1; i <= 5; i++) {
    if (i === index) {
      if (currentVideoIndex === index) {
        // If the same video is pressed again, restart it
        videos[i].time(0);
      } else {
        // Otherwise, play the selected video and hide the others
        videos[i].play();
        videos[i].loop();
        videos[i].show();
      }
    } else {
      videos[i].stop();
      videos[i].hide();
    }
  }
  currentVideoIndex = index;
}

// Play a video when a key is pressed 1 2 3 4 5 6 7 8 9 0  q w e r
function keyPressed() {
  background(0);
  if (keyCode >= 49 && keyCode <= 54) {
    const newIndex = keyCode - 48;
    playVideo(newIndex);
  }
}