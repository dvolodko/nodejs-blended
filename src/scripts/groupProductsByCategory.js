import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/constants.js';

const groupProductsByCategory = async () => {
  try {
    const products = await fs.readFile(PATH_DB);
    const parsedProducts = JSON.parse(products);

    const groupedProducts = {};

    parsedProducts.forEach(({ category }) => {
      groupedProducts[category] = parsedProducts
        .filter(product => product.category === category)
        .map(({ name }) => name);
    });

    console.log(groupedProducts);
  } catch (error) {
    console.error(error.message);
  }
};

groupProductsByCategory();
