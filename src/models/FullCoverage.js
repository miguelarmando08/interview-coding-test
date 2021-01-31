const Product = require("./Product");

class FullCoverage extends Product {
  constructor(...props) {
    super(...props);
  }

  updatePrice() {
    this._increasePrice();
    this.sellIn--;
  }

  _increasePrice() {
    this.price++;
    if (this.sellIn <= 0) this.price++;

    if (this.price > 50) this.price = 50;
  }
}

module.exports = FullCoverage;
