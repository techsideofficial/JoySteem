const { Console } = require("console");

var meanNumber = fetch('https://us-central1-joysteem.cloudfunctions.net/recworks-progress-mean').response
var progBar = fetch('https://us-central1-joysteem.cloudfunctions.net/progress/' + meanNumber).response

var img = document.createElement("img");
img.src = progBar;
var src = document.getElementById("header");
src.appendChild(img);