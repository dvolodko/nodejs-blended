import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/constants.js';

const getProductsCategories = async () => {
  try {
    const products = await fs.readFile(PATH_DB);
    const parsedProducts = JSON.parse(products);

    const categories = parsedProducts
      .map(({ category }) => category)
      .filter((category, index, arr) => index === arr.indexOf(category));
    return categories;
  } catch (error) {
    console.error(error.message);
  }
};

console.log(await getProductsCategories());
