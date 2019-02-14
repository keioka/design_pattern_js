export class Stock {
  name: string;
  amount: number = 0;
  constructor(name) {
    this.name = name;
  }

  buy(amount) {
    this.amount += amount;
    console.log(`[Buy]: ${amount} - current amount is ${this.amount}`);
  }

  sell(amount) {
    if (this.amount - amount < 0) {
      console.log('[Sell] Cannot sell');
    } else {
      this.amount -= amount;
      console.log(`[Sell]: ${amount} - current amount is ${this.amount}`);
    }
  }
}

interface ICommand {
  stock: Stock;
  lastAction: number;
  execute: (amount: number) => void;
  undo: () => void;
  redo: () => void;
}

export class BuyStock implements ICommand {
  stock: Stock;
  lastAction: number;
  constructor(stock) {
    this.stock = stock;
  }
  execute(amount: number): void {
    this.stock.buy(amount);
    this.lastAction = amount;
  }

  redo(): void {
    this.stock.buy(this.lastAction);
  }

  undo(): void {
    this.stock.sell(this.lastAction);
  }
}

export class SellStock implements ICommand {
  stock: Stock;
  lastAction: number;
  constructor(stock) {
    this.stock = stock;
  }
  execute(amount: number): void {
    this.stock.sell(amount);
    this.lastAction = amount;
  }

  redo(): void {
    this.stock.sell(this.lastAction);
  }

  undo(): void {
    this.stock.buy(this.lastAction);
  }
}

interface IInvoker {
  order: (command: ICommand, amount: number) => void;
  redo: (command: ICommand) => void;
  undo: (command: ICommand) => void;
}

export class Dealer implements IInvoker {
  order(command: ICommand, amount: number): void {
    command.execute(amount);
  }

  redo(command: ICommand) {
    command.redo();
  }

  undo(command: ICommand) {
    command.undo();
  }
}
