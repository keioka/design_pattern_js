export class CareTaker {
  savedStates: Array<Memento> = [];

  add(memento: Memento): void {
    this.savedStates.push(memento);
  }

  getIndex(index: number): Memento {
    if (this.savedStates[index]) {
      return this.savedStates[index];
    } else {
      throw new Error("Index is not found");
    }
  }
  
}
export class Originator {

  state: string;

  getState(): string {
    return this.state;
  }
  setState(state: string): void {
    this.state = state;
  }
  saveToMemento(): Memento {
    console.log("save to memento");
    return new Memento(this.state);
  }
  restore(memento: Memento) {
    console.log("restored state");
    this.state = memento.getState();
  }
}
class Memento {

  state: string;
  constructor(state: string) {
    this.state = state;
  }
  getState(): string {
    return this.state;
  }

}