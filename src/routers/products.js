import { Router } from 'express';
import {
  createProductsController,
  getAllProductsController,
} from '../controllers/products.js';

const router = Router();

router.get('/products', getAllProductsController);

router.post('/products', createProductsController);

export default router;
