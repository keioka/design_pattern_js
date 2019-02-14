interface Cloneable {
  createClone: () => Cloneable;
}

function Component(className, children) {
  this.className = className;
  this.children = children;
}

Component.prototype.render = function() {
  return this.generateDOM();
};

Component.prototype.getClone = function() {
  return this.createClone();
};

function ComponentDiv(className, children) {
  Component.call(this, className, children);
}

ComponentDiv.prototype = Object.create(Component.prototype);
ComponentDiv.prototype.generateDOM = function() {
  return `<div class=${this.className}>${this.children}</div>`;
};
ComponentDiv.prototype.createClone = function() {
  return new ComponentDiv(this.className, this.children);
};

function ComponentSpan(className, children) {
  Component.call(this, className, children);
}
ComponentSpan.prototype = Object.create(Component.prototype);
ComponentSpan.prototype.generateDOM = function() {
  return `<span class=${this.className}>${this.children}</span>`;
};
ComponentSpan.prototype.createClone = function() {
  return new ComponentSpan(this.className, this.children);
};

function ComponentParagraph(className, children) {
  Component.call(this, className, children);
}

ComponentParagraph.prototype = Object.create(Component.prototype);
ComponentParagraph.prototype.generateDOM = function() {
  return `<p class=${this.className}>${this.children}</p>`;
};
ComponentParagraph.prototype.createClone = function() {
  return new ComponentParagraph(this.className, this.children);
};

function PrototypeManager() {
  this.store = {};
}

PrototypeManager.prototype.addPrototype = function(key: string, cloneable: Cloneable): void {
  this.store[key] = cloneable;
};

PrototypeManager.prototype.getPrototype = function(key: string) {
  if (this.store[key]) return this.store[key].getClone();
};

module.exports = {
  PrototypeManager,
  ComponentParagraph,
  ComponentSpan,
  ComponentDiv
};
