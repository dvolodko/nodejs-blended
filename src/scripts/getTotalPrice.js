import fs from "node:fs/promises";
import { PATH_DB } from "../constants/constants.js";

const getTotalPrice = async () => {
  try {
    const product = await fs.readFile(PATH_DB, "utf-8");
    const parseProduct = JSON.parse(product);
    const totalPrice = parseProduct.reduce(
      (totalPrice, product) => (totalPrice += Number(product.price)),
      0
    );
    console.log(totalPrice.toFixed(2));
  } catch (error) {
    console.log(error.message);
  }
};
getTotalPrice();
