import { PrototypeManager, ComponentParagraph, ComponentSpan, ComponentDiv } from './prototype';
(function main() {
    const p = new ComponentParagraph('p1', 'this is paragraph');
    const div = new ComponentDiv('div', 'hello');
    const span = new ComponentSpan('span', 'span');
    console.log(p.render());
    var prototypeManager = new PrototypeManager();
    prototypeManager.addPrototype('p', p);
    prototypeManager.addPrototype('div', div);
    prototypeManager.addPrototype('span', span);
    const copyElementP = prototypeManager.getPrototype('p');
    console.log(copyElementP.render());
})();
