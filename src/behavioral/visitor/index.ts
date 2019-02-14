import { ServerA, ServerB, ServerC, WebClinet } from './visitor.es6';

(function main(): void {
  const webClinet = new WebClinet(); // visitor
  const serverA = new ServerA(); // visitee
  const serverB = new ServerB(); // visitee
  const serverC = new ServerC(); // visitee

  serverA.accept(webClinet);
  serverB.accept(webClinet);
  serverC.accept(webClinet);
})();
