import { ProductModel } from '../db/models/Product.js';

export const getAllProducts = () => ProductModel.find();

export const getProductById = (id) => ProductModel.findById(id);
// export const getProductById = (productId) => ProductModel.findOne({ _id: productId });

export const createProduct = (productData) => ProductModel.create(productData);

// export const deleteProduct = (id) => ProductModel.findByIdAndDelete(id);
export const deleteProduct = (productId) =>
  ProductModel.findOneAndDelete({ _id: productId });

// export const updateProduct = (id, productData, options = {}) =>
//   ProductModel.findByIdAndUpdate(id, productData, {new: true, ...options});
export const updateProduct = (id, productData, options = {}) =>
  ProductModel.findOneAndUpdate({ _id: id }, productData, {
    new: true,
    ...options,
  });
