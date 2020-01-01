var board;


function setup() {
  createCanvas(SCREEN_WIDTH, SCREEN_HEIGHT);
  background(color(GREEN));
  setBoard();
  board.draw();
}

function draw() {
  
}


function setBoard(){
  board = new Board(BOARD_POS_X, BOARD_POS_Y, BOARD_ROWS, BOARD_COLS);
}