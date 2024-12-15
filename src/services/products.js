import { ProductModel } from '../db/models/Product.js';

export const getAllProducts = () => ProductModel.find();

export const createProduct = (productData) => ProductModel.create(productData);
