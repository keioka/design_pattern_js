import { BubbleSort, Context } from './strategy.es6';
(function main() {
    const sorter = new Context(new BubbleSort());
    sorter([1, 3, 4, 7]);
})();
