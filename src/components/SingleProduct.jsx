import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { items } from './Data'
import Products from './Products';


const SingleProduct = () => {
  const {state} = useLocation();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const productsFilter = items.filter((product) => product.id === state);
    const relatedProducts = items.filter((allCategory) => allCategory.id === state.category);
    setProduct(productsFilter);
    setRelatedProducts(relatedProducts)
  }, [])
  return (
    <div className='w-4/5 mx-auto my-20'>
      <h1 className='text-2xl font-semibold'>Products Details:</h1>
      <div>
        {
          state ?(
            <article className='bg-gray-200 py-5 rounded-md'>
                <img className='w-4/12 mx-auto' src={state.imgSrc} alt="" />
                <div className='text-center py-8'>
                  <h1 className='text-3xl font-bold '>{state.title}</h1>
                  <p>{state.description}</p>
                  <div className='my-3 flex justify-center'>
                      <p className='p-3 mx-2 bg-blue-500 w-2/12 text-center font-semibold text-white rounded-md'>$ {state.price}</p>
                      <button className='p-3 mx-2 bg-yellow-500 w-2/12 text-center font-semibold text-white rounded-md'>Add to Cart</button>
                  </div>
                </div>
            </article>
            
          ) : (<p>Product not found</p>)
        } 
      </div>
      <Products state={relatedProducts} />
    </div>
  )
}

export default SingleProduct