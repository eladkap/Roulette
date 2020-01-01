var board;
var wheel;
var cash;


function setup() {
  createCanvas(SCREEN_WIDTH, SCREEN_HEIGHT);
  frameRate(FPS);
  setBoard();
  setWheel();
  setCash();
}

function draw() {
  background(color(GREEN));
  board.draw();
}


function setBoard(){
  board = new Board(BOARD_POS_X, BOARD_POS_Y, BOARD_ROWS, BOARD_COLS);
}

function setWheel(){
  wheel = new Wheel();
}

function setCash(){
  cash = 500;
}

function mouseMoved(){
  for (let cell of board.tiles){
    if (cell.isFocused(mouseX, mouseY)){
      cell.setFocus(true);
    }
    else{
      cell.setFocus(false);
    }
  }
}
