class Product {
  constructor(name, sellIn, price) {
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
  }

  updatePrice() {}

  toString() {
    return [this.name, `${this.sellIn} days`, this.price];
  }
}

module.exports = Product;
