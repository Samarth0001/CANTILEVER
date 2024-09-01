import React from 'react'
import Card from './Card'

const Featured = ({products,shuffle, sortingproducts}) => {
  if(sortingproducts==='none') shuffle();

  return (
    <div className='w-3/4 h-full ml-[45px] mt-[70px]'>
        <h2 className='text-center text-2xl mt-4 font-bold mb-4'>Featured Products</h2>
        <div className='flex flex-wrap'>
            {
            products.map( (product) => (
                <Card key={product.details.model} product = {product} />
            ))
            }
        </div>
    </div>
  )
}

export default Featured