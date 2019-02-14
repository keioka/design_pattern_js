interface State {
  print: () => void;
}

export class LowercaseState implements State {
  print(text: string) {
    console.log(text.toLowerCase());
  }
}

export class UppercaseState implements State {
  print(text: string) {
    console.log(text.toUpperCase());
  }
}

export class NormalState implements State {
  print(text: string) {
    console.log(text);
  }
}

export class Context {
  state: State;
  text: string;

  setState(state: State) {
    this.state = state;
  }

  print(text) {
    this.state.print(text);
  }
}