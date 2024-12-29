import { Router } from 'express';
import {
  createProductsController,
  deleteProductController,
  getAllProductsController,
  getProductByIdController,
  patchProductController,
} from '../controllers/products.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { checkToken } from '../middlewares/checkToken.js';

const router = Router();

router.get('/products', checkToken, ctrlWrapper(getAllProductsController));

router.get('/products/:id', checkToken, ctrlWrapper(getProductByIdController));

router.post('/products', checkToken, ctrlWrapper(createProductsController));

router.delete(
  '/products/:id',
  checkToken,
  ctrlWrapper(deleteProductController),
);

router.patch('/products/:id', checkToken, ctrlWrapper(patchProductController));

export default router;
