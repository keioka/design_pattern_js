export class LowercaseState {
    print(text) {
        console.log(text.toLowerCase());
    }
}
export class UppercaseState {
    print(text) {
        console.log(text.toUpperCase());
    }
}
export class NormalState {
    print(text) {
        console.log(text);
    }
}
export class Context {
    setState(state) {
        this.state = state;
    }
    print(text) {
        this.state.print(text);
    }
}
