const expect = require("chai").expect;
const times = require("lodash").times;
const LowCoverage = require("../../src/models/LowCoverage");

describe("LowCoverage", () => {
  describe("#constructor()", function () {
    it("should create a LowCoverage insurance product with the correct attributes", () => {
      const lowCoverage = new LowCoverage("Low Coverage", 5, 7);

      expect(lowCoverage.name).equal("Low Coverage");
      expect(lowCoverage.sellIn).equal(5);
      expect(lowCoverage.price).equal(7);
    });
  });

  describe("#updatePrice()", function () {
    it("should update the product correctly at day 1", () => {
      const lowCoverage = new LowCoverage("Low Coverage", 5, 7);

      lowCoverage.updatePrice();
      expect(lowCoverage.sellIn).equal(4);
      expect(lowCoverage.price).equal(6);
    });

    it("should update the product correctly at day 5", () => {
      const lowCoverage = new LowCoverage("Low Coverage", 5, 7);
      times(5, () => lowCoverage.updatePrice());

      expect(lowCoverage.sellIn).equal(0);
      expect(lowCoverage.price).equal(2);
    });

    it("should update the product correctly at day 10", () => {
      const lowCoverage = new LowCoverage("Low Coverage", 5, 7);
      times(10, () => lowCoverage.updatePrice());

      expect(lowCoverage.sellIn).equal(-5);
      expect(lowCoverage.price).equal(0);
    });

    it("should update the product correctly at day 30", () => {
      const lowCoverage = new LowCoverage("Low Coverage", 5, 7);
      times(30, () => lowCoverage.updatePrice());

      expect(lowCoverage.sellIn).equal(-25);
      expect(lowCoverage.price).equal(0);
    });
  });
});
