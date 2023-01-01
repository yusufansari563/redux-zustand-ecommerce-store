import { DATA_STATE } from "../utils/dataState";

export async function setProduct({set,product}) {
    return set(() => ({ product: product,loading: DATA_STATE.INITIALIZED }));
}

async function addToCart({ set, product }) {
  return set((state) => ({
    cart: [...state.cart, { ...product, total: 1 }],
  }));
}

async function deleteFromCart({ set, product }) {
  return set((state) => ({
    cart: state.cart.filter((item) => item.id !== product.id),
  }));
}

async function addSameProdInCart({ set, product }) {
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
}

async function removeSameProdInCart({ set, product }) {
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
}

const ProductRepository = (set) => {
  return {
    setProduct: (product) => setProduct({set, product}),
    addToCart: (product) => addToCart({ set, product }),
    addSameProdInCart: (product) => addSameProdInCart({ set, product }),
    removeSameProdInCart: (product) => removeSameProdInCart({ set, product }),
    deleteFromCart: (product) => deleteFromCart({ set, product }),
  };
};

export default ProductRepository;
