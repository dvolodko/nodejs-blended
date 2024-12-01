import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/constants.js';

async function getProductsByMinPrice(minPrice) {
  try {
    const products = await fs.readFile(PATH_DB, 'utf-8');
    const parsedProducts = JSON.parse(products);
    const filteredProducts = parsedProducts.filter(
      (product) => product.price >= minPrice
    );
    return filteredProducts;
  } catch (error) {
    console.log(error.message);
  }
}

console.log(await getProductsByMinPrice(300));
