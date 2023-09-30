let canvasW = window.innerWidth
let canvasH = window.innerHeight
let fullLineWidth = 1
let halfLineWidth = fullLineWidth/2
let verticalSpace = 10
let horizontalSpace = 10

let canvas = document.getElementById("canvas");
canvas.width= canvasW
canvas.height= canvasH

let context = canvas.getContext("2d");

function makeCanvas() {
  //lines from up to down, so y
  for (let y = 0; y <= canvasW; y += verticalSpace) {
    context.moveTo(halfLineWidth+ y, 0);
    context.lineTo(halfLineWidth + y, canvasH);
  }
  //lines from left to right, so x
  for (let x = 0; x <= canvasH; x += horizontalSpace) {
    context.moveTo(0, halfLineWidth + x);
    context.lineTo(canvasW, halfLineWidth + x);
  }

 
  context.lineWidth = fullLineWidth;
  context.strokeStyle = "lightcyan";
  context.stroke();
}

makeCanvas()