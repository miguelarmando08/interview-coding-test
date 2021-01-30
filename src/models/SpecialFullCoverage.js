const Product = require("./Product");

class SpecialFullCoverage extends Product {
  constructor(...props) {
    super(...props);
  }

  updatePrice() {
    this._increasePrice();
    this.sellIn--;
  }

  _increasePrice() {
    if (this.sellIn <= 0) {
      this.price = 0;
    } else if (this.sellIn <= 5) {
      this.price += 3;
    } else if (this.sellIn <= 10) {
      this.price += 2;
    } else {
      this.price++;
    }

    if (this.price > 50) this.price = 50;
  }
}

module.exports = SpecialFullCoverage;
