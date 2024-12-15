import { Router } from 'express';
import {
  createProductsController,
  deleteProductController,
  getAllProductsController,
  getProductByIdController,
  patchProductController,
} from '../controllers/products.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.get('/products', ctrlWrapper(getAllProductsController));

router.get('/products/:id', ctrlWrapper(getProductByIdController));

router.post('/products', ctrlWrapper(createProductsController));

router.delete('/products/:id', ctrlWrapper(deleteProductController));

router.patch('/products/:id', ctrlWrapper(patchProductController));

export default router;
