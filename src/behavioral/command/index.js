import { BuyStock, SellStock, Dealer, Stock } from './command.es6';
(function main() {
    const stock = new Stock('Amazon');
    const buyCommand = new BuyStock(stock);
    const sellCommand = new SellStock(stock);
    const dealer = new Dealer();
    dealer.order(buyCommand, 20);
    dealer.order(sellCommand, 20);
    dealer.order(sellCommand, 20);
    dealer.order(buyCommand, 20);
    dealer.redo(buyCommand);
    dealer.redo(buyCommand);
    dealer.undo(buyCommand);
    dealer.redo(buyCommand);
    dealer.redo(buyCommand);
    dealer.redo(sellCommand);
    dealer.undo(sellCommand);
})();
