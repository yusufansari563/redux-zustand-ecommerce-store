import create from 'zustand';
import { ProductGet } from '../services/ProductService';

export const useStore = create((set) => ({
  bears: 0,
  product: [],
  totalPrice: 0,
  cart: [],
  totalQnt: 0,
  setProduct: (product) => set(() => ({ product: product })),
  addToCart: (product) => {
    return set((state) => ({
      cart: [...state.cart, { ...product, total: 1 }],
    }));
  },
  deleteFromCart: (product) => {
    return set((state) => ({
      cart: state.cart.filter((item) => item.id !== product.id),
    }));
  },
  addSameProdInCart: (product) => {
    return set((state) => {
      const cart = state.cart.map((item) => {
        if (item.id === product.id) {
          item.total = parseInt(item.total) + 1;
        }
        return item;
      });
      console.log(cart);

      return {
        cart: cart,
      };
    });
  },
  removeSameProdInCart: (product) => {
    console.log(parseInt(product.total));
    return set((state) => {
      const cart = state.cart.filter((item) => {
        if (item.id === product.id) {
          item.total = parseInt(item.total) - 1;
        }
        return item.total > 0;
      });
      console.log(cart);

      return {
        cart: cart,
      };
    });
  },
}));
