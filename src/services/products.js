import { ProductModel } from '../db/models/Product.js';

export const getAllProducts = (userId) => ProductModel.find({ userId });

// export const getProductById = (id) => ProductModel.findById(id);
export const getProductById = (productId, userId) =>
  ProductModel.findOne({ _id: productId, userId });

export const createProduct = (productData) => ProductModel.create(productData);

// export const deleteProduct = (id) => ProductModel.findByIdAndDelete(id);
export const deleteProduct = (productId, userId) =>
  ProductModel.findOneAndDelete({ _id: productId, userId });

// export const updateProduct = (id, productData, options = {}) =>
//   ProductModel.findByIdAndUpdate(id, productData, {new: true, ...options});
export const updateProduct = (id, productData, userId, options = {}) =>
  ProductModel.findOneAndUpdate({ _id: id, userId }, productData, {
    new: true,
    ...options,
  });
