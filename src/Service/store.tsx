import create from 'zustand';
import ProductRepository, { setProduct } from './Product/productRepository';
import { DATA_STATE } from './utils/dataState';

export const useStore = create((set) => {
  return {
    bears: 0,
    product: [],
    totalPrice: 0,
    cart: [],
    totalQnt: 0,
    loading: DATA_STATE.NOT_INITIALIZED,
    ...ProductRepository(set),
  };
});
