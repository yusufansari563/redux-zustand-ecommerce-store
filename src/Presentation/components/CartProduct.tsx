import React, { useEffect } from 'react';
import { useStore } from '../../Service';

export default function CartProduct(props) {
  const [addToCart, getCart, addSameProdInCart, removeSameProdInCart] =
    useStore((state) => [
      state.addToCart,
      state.cart,
      state.addSameProdInCart,
      state.removeSameProdInCart,
    ]);

  const AddToCart = (item) => {
    addToCart(item);
  };

  const productExistCheck = () => {
    return getCart.includes(props);
  };

  return (
    <div className=' border-yellow-500 border-2 border-separate rounded-md p-2 h-full flex justify-between flex-col'>
      <img className='w-10 m-auto' src={props.image} />
      <h2 className='font-bold'>{props.title}</h2>
      <div className='flex'>
        <span
          className='w-8 text-center bg-green-400'
          onClick={()=>addSameProdInCart(props)}
        >
          +
        </span>
        <div className='w-8 text-center'>{props.total}</div>
        <span
          className='w-8 text-center bg-red-400'
          onClick={()=>removeSameProdInCart(props)}
        >
          -
        </span>
      </div>
      <p>{props.price}</p>
    </div>
  );
}
