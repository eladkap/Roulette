var board;
var wheel;
var states;

var btnIncreaseBet;
var btnDecreaseBet;


function setup() {
  createCanvas(SCREEN_WIDTH, SCREEN_HEIGHT);
  frameRate(FPS);
  setBoard();
  setWheel();
  setStates();
  setButtons();
}

function draw() {
  background(GREEN);
  board.draw();
  states.draw();
  //wheel.draw();
}


function setBoard(){
  board = new Board(BOARD_POS_X, BOARD_POS_Y, BOARD_ROWS, BOARD_COLS);
}

function setStates(){
  let bet = new Bet(width / 2 + 75, STATES_HEIGHT / 4, BET_RADIUS, BET_VALUES[0], FONT_FAMILY, FONT_SIZE2, WHITE, 0);
  states = new States(STATES_POS_X, STATES_POS_Y, STATES_WIDTH, STATES_HEIGHT, INITIAL_CASH, BET_VALUES[0], bet);
}

function setWheel(){
  wheel = new Wheel(WHEEL_POS_X, WHEEL_POS_Y, WHEEL_RADIUS, WHEEL_SLOTS);
}

function setButton(value, action, foreColor, backColor, pos, fontSize, borderRadius){
  let btn = createButton(value);
  btn.position(pos[0], pos[1]);
  btn.mousePressed(action);
  btn.style('background-color', backColor);
  btn.style('color', foreColor);
  btn.style('text-align', 'center');
  btn.style('font-size', fontSize);
  btn.style('border-radius', borderRadius);
  return btn;
}

function setButtons(){
  btnIncreaseBet = setButton('+', increaseBet, color(YELLOW), color(BLACK), [width / 2 + 200, STATES_HEIGHT / 3], FONT_SIZE3, '50%');
  btnDecreaseBet = setButton('-', decreaseBet, color(YELLOW), color(BLACK), [width / 2, STATES_HEIGHT / 3], FONT_SIZE3, '50%');
}

function increaseBet(){
  states.increaseBet();
}

function decreaseBet(){
  states.decreaseBet();
}

/* Mouse Events */

function mouseMoved(){
  for (let cell of board.tiles){
    if (cell.isFocused(mouseX, mouseY)){
      cell.setFocus(true);
      if (cell.value == '1st 12'){
        board.setCellsFocus(true, (c) => c.value >= 1 && c.value <= 12);
      }
      else if (cell.value == '2nd 12'){
        board.setCellsFocus(true, (c) => c.value >=13 && c.value <= 24)
      }
      else if (cell.value == '3rd 12'){
        board.setCellsFocus(true, (c) => c.value >=25 && c.value <= 36)
      }
      else if (cell.value == 'EVEN'){
        board.setCellsFocus(true, (c) => c.value % 2 == 0)
      }
      else if (cell.value == 'ODD'){
        board.setCellsFocus(true, (c) => c.value % 2 == 1)
      }
      else if (cell.value == '1 - 18'){
        board.setCellsFocus(true, (c) => c.value >= 1 && c.value <= 18);
      }
      else if (cell.value == '19 - 36'){
        board.setCellsFocus(true, (c) => c.value >= 19 && c.value <= 36);
      }
      else if (cell.value == 'quad black'){
        board.setCellsFocus(true, (c) => c.backColor == BLACK);
      }
      else if (cell.value == 'quad red'){
        board.setCellsFocus(true, (c) => c.backColor == RED);
      }
    }
    else{
      cell.setFocus(false);
    }
  }
}

function mousePressed(){
  for (let cell of board.tiles){
    if (cell.isFocused(mouseX, mouseY)){
      cell.chooseUnchoose();
    }
  }
}