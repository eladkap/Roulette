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
    }

    draw(){
        fill(color(BLACK));
        rect(0, 0, STATES_WIDTH, STATES_HEIGHT);

        fill(color(YELLOW));
        noStroke();
        textSize(FONT_SIZE2);
        textStyle(NORMAL);
        textFont(FONT_FAMILY);
        textAlign(CENTER, CENTER);
        text('CASH: ' + this.cash + CURRENCY, this.pos.x + SCREEN_WIDTH / 10, this.pos.y, 200, STATES_HEIGHT);
        text('BET: ' + this.currentBet + CURRENCY, this.pos.x + SCREEN_WIDTH *0.75, this.pos.y, 200, STATES_HEIGHT);  
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
        }
    }

    decreaseBet(){
        if (this.currentBetIndex > 0){
            this.currentBetIndex--;
            this.currentBet = BET_VALUES[this.currentBetIndex];
            this.bet.setValue(this.currentBet);
            this.bet.setBetIndex(this.currentBetIndex);
        }
    }

    addBet(bet){
        this.betsPlaced.push(bet);
    }

    clearBets(){
        this.betsPlaced.splice(0, this.betsPlaced.length);
    }
}