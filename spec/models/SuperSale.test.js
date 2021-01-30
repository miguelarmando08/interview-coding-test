const expect = require("chai").expect;
const times = require("lodash").times;
const SuperSale = require("../../src/models/SuperSale");

describe("SuperSale", () => {
  describe("#constructor()", function () {
    it("should create a SuperSale insurance product with the correct attributes", () => {
      const superSale = new SuperSale("Super Sale", 3, 6);

      expect(superSale.name).equal("Super Sale");
      expect(superSale.sellIn).equal(3);
      expect(superSale.price).equal(6);
    });
  });

  describe("#updatePrice()", function () {
    it("should update the product correctly at day 1", () => {
      const superSale = new SuperSale("Super Sale", 3, 6);

      superSale.updatePrice();
      expect(superSale.sellIn).equal(2);
      expect(superSale.price).equal(4);
    });

    it("should update the product correctly at day 5", () => {
      const superSale = new SuperSale("Super Sale", 3, 6);
      times(5, () => superSale.updatePrice());

      expect(superSale.sellIn).equal(-2);
      expect(superSale.price).equal(0);
    });

    it("should update the product correctly at day 10", () => {
      const superSale = new SuperSale("Super Sale", 3, 6);
      times(10, () => superSale.updatePrice());

      expect(superSale.sellIn).equal(-7);
      expect(superSale.price).equal(0);
    });

    it("should update the product correctly at day 30", () => {
      const superSale = new SuperSale("Super Sale", 3, 6);
      times(30, () => superSale.updatePrice());

      expect(superSale.sellIn).equal(-27);
      expect(superSale.price).equal(0);
    });
  });
});
