const expect = require("chai").expect;
const times = require("lodash").times;
const SpecialFullCoverage = require("../../src/models/SpecialFullCoverage");

describe("SpecialFullCoverage", () => {
  describe("#constructor()", function () {
    it("should create a SpecialFullCoverage insurance product with the correct attributes", () => {
      const specialFullCoverage = new SpecialFullCoverage(
        "Special Full Coverage",
        15,
        20
      );

      expect(specialFullCoverage.name).equal("Special Full Coverage");
      expect(specialFullCoverage.sellIn).equal(15);
      expect(specialFullCoverage.price).equal(20);
    });
  });

  describe("#updatePrice()", function () {
    it("should update the product correctly at day 1", () => {
      const specialFullCoverage = new SpecialFullCoverage(
        "Special Full Coverage",
        15,
        20
      );

      specialFullCoverage.updatePrice();
      expect(specialFullCoverage.sellIn).equal(14);
      expect(specialFullCoverage.price).equal(21);
    });

    it("should update the product correctly at day 5", () => {
      const specialFullCoverage = new SpecialFullCoverage(
        "Special Full Coverage",
        15,
        20
      );

      times(5, () => specialFullCoverage.updatePrice());
      expect(specialFullCoverage.sellIn).equal(10);
      expect(specialFullCoverage.price).equal(25);
    });

    it("should update the product correctly at day 10", () => {
      const specialFullCoverage = new SpecialFullCoverage(
        "Special Full Coverage",
        15,
        20
      );

      times(10, () => specialFullCoverage.updatePrice());
      expect(specialFullCoverage.sellIn).equal(5);
      expect(specialFullCoverage.price).equal(35);
    });

    it("should update the product correctly at day 30", () => {
      const specialFullCoverage = new SpecialFullCoverage(
        "Special Full Coverage",
        15,
        20
      );

      times(30, () => specialFullCoverage.updatePrice());
      expect(specialFullCoverage.sellIn).equal(-15);
      expect(specialFullCoverage.price).equal(0);
    });
  });

  describe("#_increasePrice()", function () {
    it("should update the price correctly when sellIn = 0", () => {
      const specialFullCoverage = new SpecialFullCoverage(
        "Special Full Coverage",
        0,
        20
      );

      specialFullCoverage._increasePrice();
      expect(specialFullCoverage.price).equal(0);
    });

    it("should update the price correctly when sellIn = 4", () => {
      const specialFullCoverage = new SpecialFullCoverage(
        "Special Full Coverage",
        4,
        20
      );

      specialFullCoverage._increasePrice();
      expect(specialFullCoverage.price).equal(23);
    });

    it("should update the price correctly when price > 50", () => {
      const specialFullCoverage = new SpecialFullCoverage(
        "Special Full Coverage",
        15,
        50
      );

      specialFullCoverage._increasePrice();
      expect(specialFullCoverage.price).equal(50);
    });
  });
});
