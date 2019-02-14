interface SortStrategy {
  sort: () => void;
}

export class Context {
  sortAlgorithm: SortStrategy;
  constructor(sortAlgorithm: SortStrategy) {
    this.sortAlgorithm = sortAlgorithm;
  }

  sort(array: number[]) {
    this.sortAlgorithm.sort(array);
  }
}

export class BubbleSort implements SortStrategy {
  sort(array: number[]): void {
    console.log('Bubble sort');
  }
}

export class QuickSort implements SortStrategy {
  sort(array: number[]): void {
    console.log('Quick sort');
  }
}
