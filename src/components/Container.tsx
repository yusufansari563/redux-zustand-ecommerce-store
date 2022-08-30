import React from 'react'
import { useStore } from '../store'


function Container({children}) {
    return (
    <div className='container mx-auto my-12'>
        {children}
    </div>
  )
}

export default Container;