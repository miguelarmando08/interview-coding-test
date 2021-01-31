const MediumCoverage = require("../../src/models/MediumCoverage");
const FullCoverage = require("../../src/models/FullCoverage");
const LowCoverage = require("../../src/models/LowCoverage");
const MegaCoverage = require("../../src/models/MegaCoverage");
const SpecialFullCoverage = require("../../src/models/SpecialFullCoverage");
const SuperSale = require("../../src/models/SuperSale");

const classesByName = {
  "Medium Coverage": MediumCoverage,
  "Full Coverage": FullCoverage,
  "Low Coverage": LowCoverage,
  "Mega Coverage": MegaCoverage,
  "Special Full Coverage": SpecialFullCoverage,
  "Super Sale": SuperSale,
};

class ProductsFactory {
  create(name, sellIn, price) {
    const ProductType = classesByName[name];
    return new ProductType(name, sellIn, price);
  }
}

module.exports = new ProductsFactory();
