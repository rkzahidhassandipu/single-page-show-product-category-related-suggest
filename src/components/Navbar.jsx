import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ProductContext } from '../Context/Context'; // Correct path to Context
import { items } from './Data';

const Navbar = () => {
  const navigat = useNavigate();
    const { filterByCategory } = useContext(ProductContext);
    const [searchTerm, setSearchTerm] = useState([]);

    const handleSearch = (e) => {
      e.preventDefault();
      navigat(`/search/${searchTerm}`)
      setSearchTerm('')
    }

    return (
        <div className='sticky top-0 z-10'>
            <div className='bg-blue-500 py-4 w-full'>
                <div className='w-4/5 mx-auto flex justify-between items-center box-border text-white'>
                    <div className='font-bold text-2xl cursor-pointer w-1/3'>
                        <Link to='/'>E-Commerce</Link>
                    </div>
                    <div className='w-1/3'>
                        <form action="" onSubmit={handleSearch}>
                          <input className='w-full outline-none text-black px-3 py-2 rounded' type="text" placeholder='Search Products' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                        </form>
                    </div>
                    <div className='w-1/3 text-right'>
                        <Link to={'/cart'}>Cart</Link>
                    </div>
                </div>
            </div>

            <div className="bg-blue-900 py-4 w-full">
                <div className="flex w-4/5 mx-auto justify-between items-center box-border text-white font-bold text-sm">
                    <div className="cursor-pointer">Filter {'->'}</div>
                    <div onClick={() => filterByCategory('')} className="cursor-pointer">No Filter</div>
                    <div onClick={() => filterByCategory('mobiles')} className="cursor-pointer">Mobile</div>
                    <div onClick={() => filterByCategory('laptops')} className="cursor-pointer">Laptops</div>
                    <div onClick={() => filterByCategory('tablets')} className="cursor-pointer">Tablets</div>
                </div>
            </div>
            
        </div>
    );
};

export default Navbar;
