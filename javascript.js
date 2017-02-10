"use strict";
var windowWidth = parseInt(document.documentElement.clientWidth);
var windowHeight = parseInt(document.documentElement.clientHeight);

console.log("Window Height: " + windowHeight);
console.log("Window Width: " + windowWidth);

function canvasSize(pixelWidthCount) {
  for (var i=0; i<pixelWidthCount; i++) {
    var div = document.createElement("div");
    var pixelContainer = document.getElementById("pixel-container");
    pixelContainer.appendChild(div);
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
var colorBox = document.getElementById('color-box');
colorContainer.addEventListener("click", function(event) {
  currentColor = event.target.className;
  colorBox.className = currentColor;
  event.target.className = currentColor;
});

// document.body.addEventListener("click", function colorSelect() {
//   let currentColor = this.style.backgroundColor;
//   let colorBox = document.getElementById("color-box");
//   colorBox.style.backgroundColor = currentColor;
//   console.log(currentColor);
// }, false);

// var colorContainer = document.getElementById("color-container");
// var selectedColor;

// var color = document.getElementsByClassName("color");
//
// function colorChanger(event) {
//   color.onclick = console.log("you clicked");
// };

// colorContainer.addEventListener("click", function () {
  // console.log(event.target.style.backgroundColor);
// })


// var getColor = function (element) {
//   console.log(element.style.backgroundColor);
// };

// colorContainer.addEventListener("click", function () {
//   // let green = document.querySelector("#dark-green");
//   let savedColor = event.target.style.backgroundColor;
//   // let newColor = document.getElementById("color-box");
//   colorContainer.style.backgroundColor = savedColor;
//   console.log("something is happening, just not what I want");
// });

// function colorSelect(color) {
//     if (color.target !== color.currentTarget) {
//         var clickedItem = color.style.backgroundColor;
//         console.log("You selected the ", clickedItem, " color.");
//     }
//     color.stopPropagation();
// }



// var colors = document.getElementsByClassName("color");

// colorContainer.addEventListener("click", function () {
//   // let pink = document.getElementById("pink");
//   // let currentColor = pink.style.backgroundColor;
//   // console.log("You selected the ", currentColor, " color.");
// }, false);
