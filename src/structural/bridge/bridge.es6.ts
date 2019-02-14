interface ITheme {
  style: object;
  toString: () => string;
}

export class DarkTheme implements ITheme {
  style: object;

  constructor() {
    this.style = {
      color: '##fff',
      backgroundColor: '#242424'
    };
  }
  toString(): string {
    return Object.keys(this.style)
      .map(key => `${key}: '${this.style[key]}'`)
      .join(' ');
  }
}

export class LightTheme implements ITheme {
  style: object;

  constructor() {
    this.style = {
      color: '#242424',
      backgroundColor: '##fff'
    };
  }

  toString(): string {
    return Object.keys(this.style)
      .map(key => `${key}: '${this.style[key]}'`)
      .join(' ');
  }
}

interface IUIComponent {
  dom: string;

  theme: ITheme;
  render: () => void;
}

export class Button implements IUIComponent {
  dom: string = 'button';
  theme: ITheme;

  constructor(theme) {
    this.theme = theme;
  }
  render() {
    console.log(`<${this.dom} style="${this.theme.toString()}"></${this.dom}>`);
  }
}
