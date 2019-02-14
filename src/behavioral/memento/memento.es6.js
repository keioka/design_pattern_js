export class CareTaker {
    constructor() {
        this.savedStates = [];
    }
    add(memento) {
        this.savedStates.push(memento);
    }
    getIndex(index) {
        if (this.savedStates[index]) {
            return this.savedStates[index];
        }
        else {
            throw new Error("Index is not found");
        }
    }
}
export class Originator {
    getState() {
        return this.state;
    }
    setState(state) {
        this.state = state;
    }
    saveToMemento() {
        console.log("save to memento");
        return new Memento(this.state);
    }
    restore(memento) {
        console.log("restored state");
        this.state = memento.getState();
    }
}
class Memento {
    constructor(state) {
        this.state = state;
    }
    getState() {
        return this.state;
    }
}
