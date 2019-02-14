function Observer(name) {
    this.name = name;
}
Observer.prototype.notify = function (data) {
    console.log("Observer- " + this.name + ": ", data);
};
function Subject() {
    this.observers = [];
}
Subject.prototype.addObserver = function (observer) {
    this.observers.push(observer);
};
Subject.prototype.notifyObserver = function (data) {
    this.observers.forEach(observer => {
        observer.notify(data);
    });
};
Subject.prototype.deleteObserver = function (observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
};
module.exports = {
    Subject,
    Observer
};
