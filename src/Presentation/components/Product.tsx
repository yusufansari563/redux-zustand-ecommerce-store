import React, { useEffect } from 'react';
import { useStore } from '../../Service';

export default function ProductComponent(props) {
  const addToCart = useStore((state:any) => state.addToCart);
  const deleteFromCart = useStore((state:any) => state.deleteFromCart);
  const getCart = useStore((state:any) => state.cart);

  const AddToCart = (item) => {
    addToCart(item);
  };

  const DeleteFromCart = (item) => {
    deleteFromCart(item);
  };

  const productExistCheck = () => {
    const check = getCart.filter((item) => {
      return item?.id === props?.id;
    });
    return check.length > 0;
  };

  return (
    <div className=' border-yellow-500 border-2 border-separate rounded-md p-2 h-full flex justify-between flex-col'>
      <img className='w-20 m-auto' src={props.image} />
      <h2 className='font-bold'>{props.title}</h2>
      <p>{props.category}</p>
      <p>{props.price}</p>
      <div className='flex justify-between'>
        <span className='text-yellow-400'>{props.rating.rate}</span>
        <p className='text-red-700'>{props.rating.count}</p>
      </div>

      <div className='grid gap-2'>
        {!productExistCheck() && (
          <button
            className='rounded-full shadow-md px-3 py-1  bg-green-400 text-white font-bold'
            onClick={() => AddToCart(props)}
          >
            Add to cart
          </button>
        )}
        {productExistCheck() && (
          <button
            className='rounded-full shadow-md px-3 py-1  bg-red-500 text-white font-bold'
            onClick={() => DeleteFromCart(props)}
          >
            Delete from cart
          </button>
        )}
      </div>
    </div>
  );
}
