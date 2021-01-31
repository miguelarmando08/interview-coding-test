const ProductsFactory = require("./factories/ProductsFactory");
const CarInsurance = require("./models/CarInsurance");
const Table = require("cli-table3");
const colors = require("colors");

const productsAtDayZero = [
  ProductsFactory.create("Medium Coverage", 10, 20),
  ProductsFactory.create("Full Coverage", 2, 0),
  ProductsFactory.create("Low Coverage", 5, 7),
  ProductsFactory.create("Mega Coverage", 0, 80),
  ProductsFactory.create("Mega Coverage", -1, 80),
  ProductsFactory.create("Special Full Coverage", 15, 20),
  ProductsFactory.create("Special Full Coverage", 10, 49),
  ProductsFactory.create("Special Full Coverage", 5, 49),
  ProductsFactory.create("Super Sale", 3, 6),
];

const carInsurance = new CarInsurance(productsAtDayZero);
const tableInstance = new Table();

for (let i = 1; i <= 30; i += 1) {
  tableInstance.push([{ colSpan: 3, content: colors.yellow(`Day ${i}`) }]);
  tableInstance.push([
    colors.red("Product Name"),
    colors.red("Sell In"),
    colors.red("Current Price"),
  ]);

  carInsurance
    .updatePrice()
    .forEach((product) => tableInstance.push(product.toString()));
}

console.log(tableInstance.toString());
