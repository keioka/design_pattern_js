class Account {
  balance: number = 0;
  successor: Account;
  setNext(successor: Account): void {
    this.successor = successor;
  }

  deposit(amount: number): void {
    this.balance += amount;
  }

  canPay(amount: number): boolean {
    return this.balance - amount >= 0;
  }

  pay(amount: number): void {
    if (this.canPay(amount)) {
      this.balance -= amount;
      console.log(`paid amount: ${amount} from your ${this.constructor.name}`);
    } else if (this.successor) {
      this.successor.pay(amount);
    } else {
      throw new Error(`None of your accounts have enough balance to pay ${amount}`);
    }
  }
}

export class Paypal extends Account {}

export class Bitcoin extends Account {}

export class Bank extends Account {}
