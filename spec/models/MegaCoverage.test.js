const expect = require("chai").expect;
const times = require("lodash").times;
const MegaCoverage = require("../../src/models/MegaCoverage");

describe("MegaCoverage", () => {
  describe("#constructor()", function () {
    it("should create a MegaCoverage insurance product with the correct attributes", () => {
      const megaCoverage = new MegaCoverage("Mega Coverage", 0, 80);

      expect(megaCoverage.name).equal("Mega Coverage");
      expect(megaCoverage.sellIn).equal(0);
      expect(megaCoverage.price).equal(80);
    });
  });

  describe("#updatePrice()", function () {
    it("should update the product correctly at day 1", () => {
      const megaCoverage = new MegaCoverage("Mega Coverage", 0, 80);

      megaCoverage.updatePrice();
      expect(megaCoverage.sellIn).equal(0);
      expect(megaCoverage.price).equal(80);
    });

    it("should update the product correctly at day 5", () => {
      const megaCoverage = new MegaCoverage("Mega Coverage", 0, 80);
      times(5, () => megaCoverage.updatePrice());

      expect(megaCoverage.sellIn).equal(0);
      expect(megaCoverage.price).equal(80);
    });

    it("should update the product correctly at day 10", () => {
      const megaCoverage = new MegaCoverage("Mega Coverage", 0, 80);
      times(10, () => megaCoverage.updatePrice());

      expect(megaCoverage.sellIn).equal(0);
      expect(megaCoverage.price).equal(80);
    });

    it("should update the product correctly at day 30", () => {
      const megaCoverage = new MegaCoverage("Mega Coverage", 0, 80);
      times(30, () => megaCoverage.updatePrice());

      expect(megaCoverage.sellIn).equal(0);
      expect(megaCoverage.price).equal(80);
    });
  });
});
