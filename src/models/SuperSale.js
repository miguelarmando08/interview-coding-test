const Product = require("./Product");

class SuperSale extends Product {
  constructor(...props) {
    super(...props);
  }

  updatePrice() {
    this._decreasePrice();
    this.sellIn--;
  }

  _decreasePrice() {
    this.price -= 2;
    if (this.sellIn <= 0) this.price -= 2;

    if (this.price < 0) this.price = 0;
  }
}

module.exports = SuperSale;
