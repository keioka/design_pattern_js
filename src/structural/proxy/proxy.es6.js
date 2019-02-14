export class ShopA {
    constructor() {
        this.items = {};
    }
    searchItem(name) {
        if (!this.items[name] || this.items[name] === 0) {
            if (this.neighborShop) {
                return this.neighborShop.searchItem(name);
            }
            return null;
        }
        return this.items[name];
    }
    setItem(item) {
        this.items[item.name] = item.count;
    }
    setNeighborShop(neighborShop) {
        this.neighborShop = neighborShop;
    }
}
export class ShopB {
    constructor() {
        this.items = {};
    }
    searchItem(name) {
        if (!this.items[name] || this.items[name] === 0) {
            if (this.neighborShop) {
                return this.neighborShop.searchItem(name);
            }
            return null;
        }
        return this.items[name];
    }
    setItem(item) {
        this.items[item.name] = item.count;
    }
    setNeighborShop(neighborShop) {
        this.neighborShop = neighborShop;
    }
}
export class Item {
    constructor(name, count) {
        this.name = name;
        this.count = count;
    }
}
