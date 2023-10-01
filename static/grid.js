let canvasW = window.innerWidth
let canvasH = window.innerHeight
let fullLineWidth = 1
let halfLineWidth = fullLineWidth/2
let verticalSpace = 10
let horizontalSpace = 10
let area = verticalSpace * horizontalSpace

let canvas = document.getElementById("canvas");
canvas.width= canvasW
canvas.height= canvasH

let context = canvas.getContext("2d");

makeCanvas()
let arr = makeArr()
colorCell(8,1)



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



function colorCell(row,column) {
  row *= 10
  column *= 10
  context.fillStyle = "black"
  context.fillRect(row,column, verticalSpace,horizontalSpace)
}


function makeArr() {
  let arr = []
  let rows = Math.floor(canvasH/10)
  let columns = Math.floor(canvasW/10)

  for (let i=0;i<rows;i++){
    let emptyArr = []
    for(let j=0; j< columns; j++){
      emptyArr.push(0)
    }
    arr.push(emptyArr)
    emptyArr =[]
  }
  return arr
}
