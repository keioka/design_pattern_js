interface Shop {
  items: object
  neighborShop: Shop

  searchItem: (name: string) => any
  setItem: (item: Item) => void

  setNeighborShop: (neighborShop: Shop) => void

}

export class ShopA implements Shop {
  items: object = {};
  neighborShop: Shop;
  searchItem(name: string): any {
    if (!this.items[name] || this.items[name] === 0) {
      if (this.neighborShop) {
        return this.neighborShop.searchItem(name);
      }
      return null;
    }

    return this.items[name];
  }
  setItem(item: Item): void {
    this.items[item.name] = item.count;
  }
  setNeighborShop(neighborShop: Shop): void {
    this.neighborShop = neighborShop;
  }

}

export class ShopB implements Shop {
  items: object = {};
  neighborShop: Shop;
  searchItem(name: string): any {
    if (!this.items[name] || this.items[name] === 0) {
      if (this.neighborShop) {
        return this.neighborShop.searchItem(name);
      }
      return null
    }

    return this.items[name]
  }
  setItem(item: Item): void {
    this.items[item.name] = item.count;
  }

  setNeighborShop(neighborShop: Shop): void {
    this.neighborShop = neighborShop;
  }
}

export class Item {
  name: string;
  count: number;
  constructor(name: string, count: number) {
    this.name = name;
    this.count = count;
  }
}