export class DarkTheme {
    constructor() {
        this.style = {
            color: '##fff',
            backgroundColor: '#242424'
        };
    }
    toString() {
        return Object.keys(this.style)
            .map(key => `${key}: '${this.style[key]}'`)
            .join(' ');
    }
}
export class LightTheme {
    constructor() {
        this.style = {
            color: '#242424',
            backgroundColor: '##fff'
        };
    }
    toString() {
        return Object.keys(this.style)
            .map(key => `${key}: '${this.style[key]}'`)
            .join(' ');
    }
}
export class Button {
    constructor(theme) {
        this.dom = 'button';
        this.theme = theme;
    }
    render() {
        console.log(`<${this.dom} style="${this.theme.toString()}"></${this.dom}>`);
    }
}
