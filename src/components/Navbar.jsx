import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className='bg-blue-500 py-4 w-full'>
           <div className='w-4/5 mx-auto flex justify-between items-center box-border text-white'>
                <div className='font-bold text-2xl cursor-pointer w-1/3'>E-Commerce</div>
                <div className='w-1/3'>
                    <input className='w-full outline-none' type="text" placeholder='Search Products' />
                </div>
                <div className=' w-1/3 text-right '>Cart</div>
           </div>
        </div>
        
        <div className='bg-blue-900 py-4 w-full'>
            <div className='flex w-4/5 mx-auto justify-between items-center box-border text-white font-bold text-sm'>
                <div className='cursor-pointer'>Filter {'->'}</div>
                <div className='cursor-pointer'>No Filter</div>
                <div className='cursor-pointer'>Mobile</div>
                <div className='cursor-pointer'>Laptops</div>
                <div className='cursor-pointer'>Tablets</div>
                <div className='cursor-pointer'>{'>='}29999</div>
                <div className='cursor-pointer'>{">="}49999</div>
                <div className='cursor-pointer'>{'>='}69999</div>
                <div className='cursor-pointer'>{'>='}89999</div>
            </div>
        </div>
    </div>
  )
}

export default Navbar