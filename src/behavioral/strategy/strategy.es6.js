export class Context {
    constructor(sortAlgorithm) {
        this.sortAlgorithm = sortAlgorithm;
    }
    sort(array) {
        this.sortAlgorithm.sort(array);
    }
}
export class BubbleSort {
    sort(array) {
        console.log('Bubble sort');
    }
}
export class QuickSort {
    sort(array) {
        console.log('Quick sort');
    }
}
