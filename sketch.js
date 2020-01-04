var board;
var wheel;
var states;

var btnIncreaseBet;
var btnDecreaseBet;
var btnSpin;

var focusTiles = [];
var bets = [];


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
  drawBets();
  //wheel.draw();
}


function setBoard(){
  board = new Board(BOARD_POS_X, BOARD_POS_Y, BOARD_ROWS, BOARD_COLS);
}

function setStates(){
  let bet = new Bet(width / 2 + 75, STATES_HEADER_HEIGHT / 6, BET_RADIUS, BET_VALUES[0], FONT_FAMILY, FONT_SIZE2, WHITE, 0);
  states = new States(STATES_POS_X, STATES_POS_Y, STATES_WIDTH, STATES_HEADER_HEIGHT, INITIAL_CASH, BET_VALUES[0], bet);
}

function setWheel(){
  wheel = new Wheel(WHEEL_POS_X, WHEEL_POS_Y, WHEEL_RADIUS, WHEEL_SLOTS);
}

function setButton(value, action, foreColor, backColor, pos, fontSize, borderRadius, iconImg){
  let btn;
  if (iconImg == null){
    btn = createButton(value);
  }
  else{
    //btn = createImage(iconImg);
    btn = null;
  }
  btn.position(pos[0], pos[1]);
  btn.mousePressed(action);
  btn.style('background-color', backColor);
  btn.style('color', foreColor);
  btn.style('text-align', 'center');
  btn.style('font-size', fontSize);
  btn.style('border-radius', borderRadius);
  btn.style('i class', 'fa fa-home');
  return btn;
}

function setButtons(){
  btnIncreaseBet = setButton('+', increaseBet, color(YELLOW), color(BLACK), [width / 2 + 200, STATES_HEADER_HEIGHT / 3], FONT_SIZE3, '50%', null);
  btnDecreaseBet = setButton('-', decreaseBet, color(YELLOW), color(BLACK), [width / 2, STATES_HEADER_HEIGHT / 3], FONT_SIZE3, '50%', null);
  btnSpin = setButton('Spin', spinRoulette, color(YELLOW), color(BLACK), [width / 2 + 300, STATES_HEADER_HEIGHT / 3], FONT_SIZE3, '10%', null);
}

function increaseBet(){
  states.increaseBet();
}

function decreaseBet(){
  states.decreaseBet();
}

function spinRoulette(){
  if (states.betsPlaced.length == 0){
    states.setMessage('Please place your bets.');
  }
}

function drawBets(){
  for (let bet of bets){
    bet.draw();
  }
}

function placeBet(pos){
  let bet = new Bet(pos[0], pos[1], TILE_SIZE / 4, states.bet.value, FONT_FAMILY, FONT_SIZE1 / 2, WHITE, 0);
  bet.setBackcolor(states.bet.backColor);
  bets.push(bet);
}

/* Mouse Events */

function mouseMoved(){
  focusTiles = [];
  for (let cell of board.tiles){
    let isfocused;
    if (cell.w == TILE_SIZE){
      isfocused = cell.isFocusedNear(mouseX, mouseY);
    }
    else{
      isfocused = cell.isFocusedIn(mouseX, mouseY);
    }
    if (isfocused){
      cell.setFocus(true);
      focusTiles.push(cell);
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
  if (focusTiles.length == 3){
    board.setCellsFocus(false, (c) => true);
    focusTiles = [];
  }
}

function mousePressed(){
  if (mouseButton === LEFT) {
    if (focusTiles.length == 0){
      return;
    }
    let sumX = 0;
    let sumY = 0;
    for (let cell of focusTiles){
      if (cell.hasBet()){
        return;
      }
      cell.addBet(states.bet.value);
      sumX += cell.pos.x + cell.w/4;
      sumY += cell.pos.y + cell.h/4; 
    }
    let pos = [sumX / focusTiles.length, sumY / focusTiles.length];
    placeBet(pos);
  }
  else if (mouseButton == CENTER){
    for (let i = 0; i < bets.length; i++){
      let bet = bets[i];
      if (bet.isClicked(mouseX, mouseY)){
        bets.splice(i, 1);
      }
    }
  }
}
