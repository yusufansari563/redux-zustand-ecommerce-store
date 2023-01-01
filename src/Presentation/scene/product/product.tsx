import React, { Component, useState } from 'react';
import { ProductGet } from '../../../Domain/UseCases/ProductService';
import { useStore } from '../../../Service';
import { getProduct } from '../../../Service/Product/Thunk';
import { DATA_STATE } from '../../../Service/utils/dataState';
import Loader from '../../components/Loader/Loader';
import ProductComponent from '../../components/Product';
import Cart from './../Cart';

export default function Product() {
  const loading = useStore((state: any) => state.loading);
  const productList = useStore((state: any) => state.product);
  const setProductStore = useStore((state: any) => state.setProduct);
  React.useEffect(() => {
    ProductGet().then((res) => setProductStore(res));
  }, []);

  switch (loading) {
    case DATA_STATE.FETCHING:
      return <Loader />;
    case DATA_STATE.INITIALIZED:
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
    default:
      return <Loader />;
    // throw new Error('Unknown data state!');
  }
}
