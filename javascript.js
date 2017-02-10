"use strict";
var windowWidth = parseInt(document.documentElement.clientWidth);
var windowHeight = parseInt(document.documentElement.clientHeight);

function canvasSize(pixelWidthCount) {
  for (var i=0; i<pixelWidthCount; i++) {
    var div = document.createElement("div");
    var pixelContainer = document.getElementById("pixel-container");
    pixelContainer.appendChild(div);
    div.id = "pixel";
    div.className = "pixel";
  }
}

var pixels = "";

function screenSize() {
  if (windowWidth < 768) {
    pixels = 494;
  } else if (windowWidth >= 768 && windowWidth < 1200) {
    pixels = 1792;
  } else if (windowWidth >= 1200) {
    pixels = 4000;
  }
}
screenSize();

window.addEventListener("resize", function resizeCheck() {
  console.log("The window is being resized");
  location.reload();
});

canvasSize(pixels);

var currentColor;
var colorContainer = document.getElementById('color-container');
var pixelContainer = document.getElementById('pixel-container');
var colorBox = document.getElementById('color-box');

colorContainer.addEventListener("click", function(event) {
  if (event.target.className !== "color-container") {
    currentColor = event.target.className;
    colorBox.className = currentColor;
    event.target.className = currentColor;
  }
});

pixelContainer.addEventListener("click", function(event) {
  if (currentColor !== undefined) {
    currentColor = colorBox.className;
    event.target.className = currentColor.slice(6);
  }
})
