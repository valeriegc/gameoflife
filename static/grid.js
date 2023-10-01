let canvasW = window.innerWidth
let canvasH = window.innerHeight
let fullLineWidth = 1
let halfLineWidth = fullLineWidth/2
let verticalSpace =  5
let horizontalSpace = 5
let area = verticalSpace * horizontalSpace

let canvas = document.getElementById("canvas");
canvas.width= canvasW
canvas.height= canvasH

let context = canvas.getContext("2d");

makeCanvas()
let arr = makeArr()
arr = fillArr(arr)
colorArr(arr)
setInterval(() => {
  arr = conveyRuleArray(arr)
  colorArr(arr)
}, 500)


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



function colorCell(row,column,color) {
  row *= 10
  column *= 10
  context.fillStyle = color
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

function fillArr(arr) {
let rowLength = arr[1].length
for (let i=0; i<arr.length; i++){
  for (let j=0; j<rowLength; j++){
    if(Math.random()<0.1) arr[i][j] =1 
  }
}
return arr
}

function colorArr(arr){
  let rowLength = arr[1].length
  for (let i=0; i<arr.length; i++){
    for (let j=0; j<rowLength; j++){
      if(arr[i][j] ==1) colorCell(j,i,"turquoise") 
      else colorCell(j,i,"white")
    }
  }
}

function conveyRuleArray(arr) {
/** CONWAYS RULES OF LIFE
* A live cell dies if it has fewer than two live neighbors.
* A live cell with two or three live neighbors lives on to the next generation.
* A live cell with more than three live neighbors dies.
* A dead cell will be brought back to live if it has exactly three live neighbors.**/
let rowLength = arr[1].length
let newArr = makeArr()

for (let y=0; y<arr.length; y++){
  for (let x=0; x<rowLength; x++){
  let neighbors = neighborCellCount(arr,x,y)
  let cellAlive = arr[y][x] ==1 

  if (cellAlive){
  if (neighbors < 2) newArr[y][x] = 0
  else if (neighbors == 2 || neighbors == 3) newArr[y][x] = 1
  else newArr[y][x] = 0}

  if (!cellAlive && neighbors==3) newArr[y][x]=1
  }
}
return newArr
}

function neighborCellCount(arr, x, y){
let xStart = 0 
let yStart= 0
let xLength= arr[1].length
let yLength= arr.length

let topLeft
let topMiddle
let topRight
let left
let right
let bottomLeft
let bottomMiddle
let bottomRight

topLeft = arr[(y-1+yLength)%yLength][(x-1+xLength)%xLength]
topMiddle = arr[(y-1+yLength)%yLength][x]
topRight = arr[(y-1+yLength)%yLength][(x+1+xLength)%xLength]
left = arr[y][(x-1+xLength)%xLength]
right = arr[y][(x+1+xLength)%xLength]
bottomLeft = arr[(y+1+yLength)%yLength][(x-1+xLength)%xLength]
bottomMiddle = arr[(y+1+yLength)%yLength][x]
bottomRight = arr[(y+1+yLength)%yLength][(x+1+xLength)%xLength]

return (topLeft+topMiddle+topRight+left+right+bottomLeft +bottomMiddle +bottomRight)
}