import { DarkTheme, LightTheme, Button } from './bridge.es6';
(function main() {
    const darkTheme = new DarkTheme();
    const lightTheme = new LightTheme();
    const button1 = new Button(lightTheme);
    button1.render();
    const button2 = new Button(darkTheme);
    button2.render();
})();
