import { ShopA, ShopB } from './proxy.es6';
(function main() {
    const shopA = new ShopA();
    const shopB = new ShopB();
    shopA.setItem({ name: 'apple', count: 0 });
    shopB.setItem({ name: 'apple', count: 20 });
    shopA.setNeighborShop(shopB);
    console.log(shopA.searchItem('apple'));
})();
