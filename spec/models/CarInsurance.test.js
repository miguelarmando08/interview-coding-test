const expect = require("chai").expect;
const sinon = require("sinon");
const CarInsurance = require("../../src/models/CarInsurance");
const Product = require("../../src/models/Product");

describe("CarInsurance", () => {
  describe("#constructor()", function () {
    it("should create a CarInsurance with the correct attributes", () => {
      const products = [
        new Product("Product 1", 10, 20),
        new Product("Product 2", 20, 1),
        new Product("Product 3", 30, 5),
      ];

      const carInsurance = new CarInsurance(products);
      const emptyCarInsurance = new CarInsurance();

      expect(carInsurance.products).equal(products);
      expect(emptyCarInsurance.products).to.be.an("array");
      expect(emptyCarInsurance.products.length).equal(0);
    });
  });

  describe("#updatePrice()", function () {
    it("should update the product prices", () => {
      const products = [
        new Product("Product 1", 10, 1),
        new Product("Product 2", 11, 2),
        new Product("Product 3", 12, 8),
      ];

      const spies = products.map((product) =>
        sinon.spy(product, "updatePrice")
      );

      const carInsurance = new CarInsurance(products);
      carInsurance.updatePrice();

      spies.forEach((product) => {
        sinon.assert.calledOnce(product);
      });
    });
  });
});
