import React, { Component, useState } from 'react';
import { ProductGet } from '../../services/ProductService';
import { useStore } from '../../store';
import ProductComponent from '../../components/Product';
import Cart from './Cart';

export function Product() {
  const productList = useStore((state) => state.product);
  const setProductStore = useStore((state) => state.setProduct);
  const [Product, setProduct] = useState([]);

  React.useEffect(() => {
    ProductGet().then((res) => setProductStore(res));
  }, []);

  return (
    <div className='flex'>
      <div className='grid gap-4 grid-cols-3 grid-rows-3'>
        {productList?.map((item, index) => (
          <ProductComponent key={index} {...item} />
        ))}
      </div>
      <div className=' border-2 flex-auto'>
        <Cart />
      </div>
    </div>
  );
}
