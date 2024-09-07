import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { items } from './Data'
import Products from './Products';


const SingleProduct = () => {
  const {state} = useLocation();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const filteredProduct = items.find((item) => item.id === state?.id);
    setProduct(filteredProduct);

    if(filteredProduct){
      const related = items.filter((item) => item.category === filteredProduct.category && item.id !== filteredProduct.id);
      setRelatedProducts(related)
    }
  }, [state])
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
      <div>
        <h1 className='text-2xl font-semibold'>Related Products: </h1>
        {
          relatedProducts.length > 0 ? (
            <div className='grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-6 my-10'>
              {
                relatedProducts.map((relatedProduct) => (
                  
                  <article className='border bg-slate-100 rounded-lg cursor-pointer hover:shadow-2xl duration-300' key={relatedProduct.id}>
                    <img className='w-4/5 mx-auto max-h-80' src={relatedProduct.imgSrc} alt="" />
                    <div className='p-3'>
                        <h1 className='font-bold'>{relatedProduct.title}</h1>
                        <p className='text-gray-400'>{relatedProduct.description}</p>
                        <div className='my-3 flex relative bottom-0'>
                            <p className='p-3 mx-2 bg-blue-500 w-1/3 text-center font-semibold text-white rounded-md'>$ {relatedProduct.price}</p>
                            <button className='p-3 mx-2 bg-yellow-500 w-1/3 text-center font-semibold text-white rounded-md'>Add to Cart</button>
                        </div>
                    </div>
                  </article>
                ))
              }
            </div>
          ) : (<p>Products not Found</p>)
        }
      </div>
    </div>
  )
}

export default SingleProduct