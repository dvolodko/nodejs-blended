import path from 'node:path';
import fs from 'node:fs/promises';
import { PATH_DB, PATH_FILES_DIR } from '../constants/constants.js';

const createProductsFiles = async () => {
  try {
    const products = await fs.readFile(PATH_DB);
    const parsedProducts = JSON.parse(products);

    parsedProducts.forEach(product => {
      const fileName = `${product.name
        .toLowerCase()
        .split(' ')
        .join('-')}.json`;
      const filePath = path.join(PATH_FILES_DIR, fileName);

      fs.writeFile(filePath, JSON.stringify(product, null, 2));
    });
  } catch (error) {
    console.error(error.message);
  }
};

createProductsFiles();
