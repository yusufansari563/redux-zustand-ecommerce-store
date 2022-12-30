import React from 'react'
import Cart from '../scene/product/Cart'
import { useStore } from '../../store'

function Price() {
  const getCart = useStore(state=>state.cart);
  
  const priceCalculator=()=>{
    const price = getCart.reduce((total,props)=>{
        return total + Math.round(props.price * props.total);
    },0)
    return price;
  }
    return (
    <div className='m-auto'>
        <span className='font-bold'>
            {priceCalculator()}
        </span>
    </div>
  )
}

export default Price