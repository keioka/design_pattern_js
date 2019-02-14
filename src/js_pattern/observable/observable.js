function Observable() {
    var observers = [];
    function subscribe(f) {
        observers.push(f);
    }
    function unsubscribe(f) {
        observers = observers.filter(subscriber => subscriber !== f);
    }
    function update(data) {
        observers.forEach(subscriber => subscriber(data));
    }
}
