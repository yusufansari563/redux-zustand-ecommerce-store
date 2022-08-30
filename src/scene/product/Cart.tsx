import React from 'react';
import CartProduct from '../../components/CartProduct';
import Price from '../../components/Price';
import { useStore } from '../../store';

function Cart() {
  const getTotalPrice = useStore((state) => state.totalPrice);
  const getCart = useStore((state) => state.cart);
  return (
    <div>
      <Price />
      {getCart.map((item,index) => {
        return <CartProduct key={index} {...item} />;
      })}
    </div>
  );
}

export default Cart;
