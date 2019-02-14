function Observable() {
    var observers: ((_: any) => any)[] = []

    function subscribe(f: ((_: any) => any)) {
        observers.push(f)
    }

    function unsubscribe(f: ((_:any) => any)) {
        observers = observers.filter(subscriber => subscriber !== f)
    }

    function update(data: any) {
        observers.forEach(subscriber => subscriber(data))
    }
}