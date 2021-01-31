const expect = require("chai").expect;
const Product = require("../../src/models/Product");

describe("Product", () => {
  describe("#constructor()", function () {
    it("should create a Product with the correct attributes", () => {
      const myNewProduct = new Product("Recharged Insurance", 20, 50);

      expect(myNewProduct.name).equal("Recharged Insurance");
      expect(myNewProduct.sellIn).equal(20);
      expect(myNewProduct.price).equal(50);
    });
  });

  describe("#toString()", function () {
    it("should return a description of the product", () => {
      const myNewProduct = new Product("Recharged Insurance", 20, 50);
      expect(myNewProduct.toString()).deep.to.equal([
        "Recharged Insurance",
        "20 days",
        50,
      ]);
    });
  });
});
