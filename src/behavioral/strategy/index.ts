import { BubbleSort, QuickSort, Context } from './strategy.es6';

(function main(): void {
  const sorter = new Context(new BubbleSort());
  sorter([1, 3, 4, 7]);
})();
