class States{
    constructor(x, y, w, h, cash, currentBet, bet){
        this.pos = createVector(x, y);
        this.w = w;
        this.h = h;
        this.cash = cash;
        this.currentBet = currentBet;
        this.currentBetIndex = 0;
        this.betsPlaced = [];
        this.bet = bet;
        this.totalBet = 0;
        this.msg = 'Place your bets';
    }

    draw(){
        fill(BLACK);
        rect(0, 0, STATES_WIDTH, STATES_HEADER_HEIGHT);
        rect(0, height - STATES_FOOTER_HEIGHT, STATES_WIDTH, STATES_FOOTER_HEIGHT);

        fill(YELLOW);
        noStroke();
        textSize(FONT_SIZE2);
        textStyle(NORMAL);
        textFont(FONT_FAMILY);
        textAlign(CENTER, CENTER);
        text('CASH: ' + this.cash + CURRENCY, this.pos.x + SCREEN_WIDTH / 20, this.pos.y, 200, STATES_HEADER_HEIGHT);
        text('BET: ' + this.totalBet + CURRENCY, this.pos.x + SCREEN_WIDTH * 0.8, this.pos.y, 200, STATES_HEADER_HEIGHT);  

        fill(YELLOW);
        textAlign(CENTER, CENTER);
        text(this.msg, this.pos.x + SCREEN_WIDTH / 2, SCREEN_HEIGHT - STATES_FOOTER_HEIGHT, this.msg.length * FONT_SIZE1, STATES_FOOTER_HEIGHT);
        textSize(FONT_SIZE1);
        this.bet.draw();
    }

    addToCash(amount){
        this.cash += amount;
    }

    increaseBet(){
        print(this.currentBetIndex);
        print(BET_VALUES.length);
        if (this.currentBetIndex < BET_VALUES.length - 1){
            this.currentBetIndex++;
            this.currentBet = BET_VALUES[this.currentBetIndex];
            this.bet.setValue(this.currentBet);
            this.bet.setBetIndex(this.currentBetIndex);
            this.bet.setBackcolor(BET_COLORS[this.currentBetIndex]);
        }
    }

    decreaseBet(){
        if (this.currentBetIndex > 0){
            this.currentBetIndex--;
            this.currentBet = BET_VALUES[this.currentBetIndex];
            this.bet.setValue(this.currentBet);
            this.bet.setBetIndex(this.currentBetIndex);
            this.bet.setBackcolor(BET_COLORS[this.currentBetIndex]);
        }
    }

    addBet(bet){
        this.betsPlaced.push(bet);
    }

    clearBets(){
        this.betsPlaced.splice(0, this.betsPlaced.length);
    }

    setMessage(msg){
        this.msg = msg;
    }
}