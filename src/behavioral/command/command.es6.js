export class Stock {
    constructor(name) {
        this.amount = 0;
        this.name = name;
    }
    buy(amount) {
        this.amount += amount;
        console.log(`[Buy]: ${amount} - current amount is ${this.amount}`);
    }
    sell(amount) {
        if (this.amount - amount < 0) {
            console.log('[Sell] Cannot sell');
        }
        else {
            this.amount -= amount;
            console.log(`[Sell]: ${amount} - current amount is ${this.amount}`);
        }
    }
}
export class BuyStock {
    constructor(stock) {
        this.stock = stock;
    }
    execute(amount) {
        this.stock.buy(amount);
        this.lastAction = amount;
    }
    redo() {
        this.stock.buy(this.lastAction);
    }
    undo() {
        this.stock.sell(this.lastAction);
    }
}
export class SellStock {
    constructor(stock) {
        this.stock = stock;
    }
    execute(amount) {
        this.stock.sell(amount);
        this.lastAction = amount;
    }
    redo() {
        this.stock.sell(this.lastAction);
    }
    undo() {
        this.stock.buy(this.lastAction);
    }
}
export class Dealer {
    order(command, amount) {
        command.execute(amount);
    }
    redo(command) {
        command.redo();
    }
    undo(command) {
        command.undo();
    }
}
