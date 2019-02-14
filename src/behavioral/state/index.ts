import { Context, LowercaseState, UppercaseState, NormalState } from './state.es6';

(function main(): void {
  const context = new Context();
  const lowercase = new LowercaseState();
  const uppercase = new UppercaseState();
  const normal = new NormalState();

  context.setState(lowercase);
  context.print('HeLLo');

  context.setState(uppercase);
  context.print('HeLLo');

  context.setState(normal);
  context.print('HeLLo');
})();
