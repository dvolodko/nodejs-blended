import fs from "node:fs/promises";
import { PATH_DB } from "../constants/constants.js";

const modifyProducts = async () => {
  const products = await fs.readFile(PATH_DB, "utf-8");
  const parseProduct = JSON.parse(products);
  const modifyProducts = parseProduct.map(
    ({ description, ...product }) => product
  );
  await fs.writeFile(PATH_DB, JSON.stringify(modifyProducts, null, 2));
};

modifyProducts();
