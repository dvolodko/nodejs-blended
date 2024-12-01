import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/constants.js';
import { createFakeProduct } from '../utils/createFakeProduct.js';

async function generateProducts(number) {
  try {
    const products = await fs.readFile(PATH_DB, 'utf-8');
    const parsedProducts = JSON.parse(products);
    for (let i = 0; i < number; i++) {
      parsedProducts.push(createFakeProduct());
    }
    await fs.writeFile(PATH_DB, JSON.stringify(parsedProducts, null, 2));
  } catch (error) {
    console.log(error.message);
  }
}

generateProducts(3);
