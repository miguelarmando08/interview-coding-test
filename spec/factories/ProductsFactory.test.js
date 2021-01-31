const expect = require("chai").expect;
const ProductsFactory = require("../../src/factories/ProductsFactory");
const MediumCoverage = require("../../src/models/MediumCoverage");
const FullCoverage = require("../../src/models/FullCoverage");
const LowCoverage = require("../../src/models/LowCoverage");
const MegaCoverage = require("../../src/models/MegaCoverage");
const SpecialFullCoverage = require("../../src/models/SpecialFullCoverage");
const SuperSale = require("../../src/models/SuperSale");

describe("ProductsFactory", () => {
  describe("#create()", function () {
    it("should return a Medium Coverage product instance", () => {
      const mediumCoverage = ProductsFactory.create("Medium Coverage", 10, 20);
      expect(mediumCoverage instanceof MediumCoverage).equal(true);
    });

    it("should return a Full Coverage product instance", () => {
      const fullCoverage = ProductsFactory.create("Full Coverage", 10, 20);
      expect(fullCoverage instanceof FullCoverage).equal(true);
    });

    it("should return a Low Coverage product instance", () => {
      const lowCoverage = ProductsFactory.create("Low Coverage", 10, 20);
      expect(lowCoverage instanceof LowCoverage).equal(true);
    });

    it("should return a Mega Coverage product instance", () => {
      const megaCoverage = ProductsFactory.create("Mega Coverage", 10, 20);
      expect(megaCoverage instanceof MegaCoverage).equal(true);
    });

    it("should return a Super Sale product instance", () => {
      const superSale = ProductsFactory.create("Super Sale", 10, 20);
      expect(superSale instanceof SuperSale).equal(true);
    });

    it("should return a Special Full Coverage product instance", () => {
      const specialFullCoverage = ProductsFactory.create(
        "Special Full Coverage",
        10,
        20
      );
      expect(specialFullCoverage instanceof SpecialFullCoverage).equal(true);
    });
  });
});
