class Account {
    constructor() {
        this.balance = 0;
    }
    setNext(successor) {
        this.successor = successor;
    }
    deposit(amount) {
        this.balance += amount;
    }
    canPay(amount) {
        return this.balance - amount >= 0;
    }
    pay(amount) {
        if (this.canPay(amount)) {
            this.balance -= amount;
            console.log(`paid amount: ${amount} from your ${this.constructor.name}`);
        }
        else if (this.successor) {
            this.successor.pay(amount);
        }
        else {
            throw new Error(`None of your accounts have enough balance to pay ${amount}`);
        }
    }
}
export class Paypal extends Account {
}
export class Bitcoin extends Account {
}
export class Bank extends Account {
}
