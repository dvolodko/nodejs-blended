import createHttpError from 'http-errors';
import {
  createProduct,
  getAllProducts,
  getProductById,
  deleteProduct,
  updateProduct,
} from '../services/products.js';

export const getAllProductsController = async (req, res) => {
  const { _id: userId } = req.user;

  const products = await getAllProducts(userId);
  res.json({
    status: 200,
    message: 'Successfully found products!',
    data: products,
  });
};

export const createProductsController = async (req, res) => {
  const { _id: userId } = req.user;

  const product = await createProduct({ ...req.body, userId });
  res.status(201).json({
    status: 201,
    message: 'Successfully created a product!',
    data: product,
  });
};

export const getProductByIdController = async (req, res) => {
  const { _id: userId } = req.user;

  const { id } = req.params;

  const product = await getProductById(id, userId);

  if (!product) {
    throw createHttpError(404, 'Product not found');
  }

  res.json({
    status: 200,
    message: `Successfully found product with id ${id}!`,
    data: product,
  });
};

export const deleteProductController = async (req, res) => {
  const { _id: userId } = req.user;

  const { id } = req.params;

  const product = await deleteProduct(id, userId);

  if (!product) {
    throw createHttpError(404, 'Product not found');
  }
  // res.status(204).end();
  res.sendStatus(204);
};

export const patchProductController = async (req, res) => {
  const { _id: userId } = req.user;

  const { id } = req.params;
  const result = await updateProduct(id, req.body, userId);

  if (!result) {
    throw createHttpError(404, 'Product not found');
  }

  res.json({
    status: 200,
    message: 'Successfully patched a product!',
    data: result,
  });
};
