import { ServerA, ServerB, ServerC, WebClinet } from './visitor.es6';
(function main() {
    const webClinet = new WebClinet();
    const serverA = new ServerA();
    const serverB = new ServerB();
    const serverC = new ServerC();
    serverA.accept(webClinet);
    serverB.accept(webClinet);
    serverC.accept(webClinet);
})();
