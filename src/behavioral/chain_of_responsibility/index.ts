import { Paypal, Bitcoin, Bank } from './chain.es6';

(function main(): void {
  const paypal = new Paypal();
  paypal.deposit(100);

  const bitcoin = new Bitcoin();
  bitcoin.deposit(500);

  const bank = new Bank();
  bank.deposit(100);
  paypal.setNext(bitcoin);
  bank.setNext(paypal);

  bank.pay(200);
})();
