import React from 'react'
import {items} from './Data'
import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <div className='w-4/5 mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-6 my-10'>
            {
                items.map((product) => {
                    return (
                       <div className='border bg-slate-100 rounded-lg cursor-pointer hover:shadow-2xl duration-300' key={product.id}>
                            <Link to={`/product/${product.id}`} state={product}>
                                <img className='w-4/5 mx-auto max-h-80' src={product.imgSrc} alt="" />
                            </Link>
                            <div className='p-3'>
                                <h1 className='font-bold'>{product.title}</h1>
                                <p className='text-gray-400'>{product.description}</p>
                                <div className='my-3 flex relative bottom-0'>
                                    <p className='p-3 mx-2 bg-blue-500 w-1/3 text-center font-semibold text-white rounded-md'>$ {product.price}</p>
                                    <button className='p-3 mx-2 bg-yellow-500 w-1/3 text-center font-semibold text-white rounded-md'>Add to Cart</button>
                                </div>
                            </div>
                       </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Products