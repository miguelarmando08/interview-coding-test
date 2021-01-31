const Product = require("./Product");

class MediumCoverage extends Product {
  constructor(...props) {
    super(...props);
  }

  updatePrice() {
    this._decreasePrice();
    this.sellIn--;
  }

  _decreasePrice() {
    this.price--;
    if (this.sellIn <= 0) this.price--;

    if (this.price < 0) this.price = 0;
  }
}

module.exports = MediumCoverage;
