const expect = require("chai").expect;
const times = require("lodash").times;
const FullCoverage = require("../../src/models/FullCoverage");

describe("FullCoverage", () => {
  describe("#constructor()", function () {
    it("should create a FullCoverage insurance product with the correct attributes", () => {
      const fullCoverage = new FullCoverage("Full Coverage", 20, 50);

      expect(fullCoverage.name).equal("Full Coverage");
      expect(fullCoverage.sellIn).equal(20);
      expect(fullCoverage.price).equal(50);
    });
  });

  describe("#updatePrice()", function () {
    it("should update the product correctly at day 1", () => {
      const fullCoverage = new FullCoverage("Full Coverage", 2, 0);

      fullCoverage.updatePrice();
      expect(fullCoverage.sellIn).equal(1);
      expect(fullCoverage.price).equal(1);
    });

    it("should update the product correctly at day 5", () => {
      const fullCoverage = new FullCoverage("Full Coverage", 2, 0);
      times(5, () => fullCoverage.updatePrice());

      expect(fullCoverage.sellIn).equal(-3);
      expect(fullCoverage.price).equal(8);
    });

    it("should update the product correctly at day 10", () => {
      const fullCoverage = new FullCoverage("Full Coverage", 2, 0);
      times(10, () => fullCoverage.updatePrice());

      expect(fullCoverage.sellIn).equal(-8);
      expect(fullCoverage.price).equal(18);
    });

    it("should update the product correctly at day 30", () => {
      const fullCoverage = new FullCoverage("Full Coverage", 2, 0);
      times(30, () => fullCoverage.updatePrice());

      expect(fullCoverage.sellIn).equal(-28);
      expect(fullCoverage.price).equal(50);
    });
  });
});
