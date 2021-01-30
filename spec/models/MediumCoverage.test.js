const expect = require("chai").expect;
const times = require("lodash").times;
const MediumCoverage = require("../../src/models/MediumCoverage");

describe("MediumCoverage", () => {
  describe("#constructor()", function () {
    it("should create a MediumCoverage insurance product with the correct attributes", () => {
      const mediumCoverage = new MediumCoverage("Medium Coverage", 10, 20);

      expect(mediumCoverage.name).equal("Medium Coverage");
      expect(mediumCoverage.sellIn).equal(10);
      expect(mediumCoverage.price).equal(20);
    });
  });

  describe("#updatePrice()", function () {
    it("should update the product correctly at day 1", () => {
      const mediumCoverage = new MediumCoverage("Medium Coverage", 10, 20);

      mediumCoverage.updatePrice();
      expect(mediumCoverage.sellIn).equal(9);
      expect(mediumCoverage.price).equal(19);
    });

    it("should update the product correctly at day 5", () => {
      const mediumCoverage = new MediumCoverage("Medium Coverage", 10, 20);
      times(5, () => mediumCoverage.updatePrice());

      expect(mediumCoverage.sellIn).equal(5);
      expect(mediumCoverage.price).equal(15);
    });

    it("should update the product correctly at day 10", () => {
      const mediumCoverage = new MediumCoverage("Medium Coverage", 10, 20);
      times(10, () => mediumCoverage.updatePrice());

      expect(mediumCoverage.sellIn).equal(0);
      expect(mediumCoverage.price).equal(10);
    });

    it("should update the product correctly at day 30", () => {
      const mediumCoverage = new MediumCoverage("Medium Coverage", 10, 20);
      times(30, () => mediumCoverage.updatePrice());

      expect(mediumCoverage.sellIn).equal(-20);
      expect(mediumCoverage.price).equal(0);
    });
  });

  describe("#_decreasePrice()", function () {
    it("should update the price correctly when sellIn = 0", () => {
      const mediumCoverage = new MediumCoverage("Medium Coverage", 0, 7);

      mediumCoverage._decreasePrice();
      expect(mediumCoverage.price).equal(5);
    });

    it("should update the price correctly when sellIn = 4", () => {
      const mediumCoverage = new MediumCoverage("Medium Coverage", 4, 7);

      mediumCoverage._decreasePrice();
      expect(mediumCoverage.price).equal(6);
    });

    it("should update the price correctly when price reach 0", () => {
      const mediumCoverage = new MediumCoverage("Medium Coverage", 0, 1);

      mediumCoverage._decreasePrice();
      expect(mediumCoverage.price).equal(0);
    });
  });
});
