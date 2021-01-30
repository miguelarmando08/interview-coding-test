const classesByName = {
  "Medium Coverage": null,
  "Full Coverage": null,
  "Low Coverage": null,
  "Mega Coverage": null,
  "Special Full Coverage": null,
  "Super Sale": null,
};

class ProductsFactory {
  create(name, sellIn, price) {
    const ProductType = classesByName[name];
    return new ProductType(name, sellIn, price);
  }
}

module.exports = new ProductsFactory();
