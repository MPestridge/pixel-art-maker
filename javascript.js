"use strict"
canvasSize(2772);

function canvasSize(pixelCount) {
  for (var i=0; i<pixelCount; i++) {
    var div = document.createElement("div");
    var pixelContainer = document.getElementById("pixel-container");
    console.log(pixelContainer);
    pixelContainer.appendChild(div);
    div.className = "pixel";
  }
}
