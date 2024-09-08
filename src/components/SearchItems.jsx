import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { items } from './Data';
import Products from './Products';

const SearchItem = () => {
  const Data = items;
  const { term } = useParams();
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {

    if (!term) {
      setFilterData([]);
      return;
    }

    const filteredProducts = (items || []).filter(product =>
      product.title.toLowerCase().includes(term.toLowerCase())
    );
    
    setFilterData(filteredProducts)
  }, [term]);

  console.log('Filter Data State:', filterData); // Log filterData state

  return(
     <Products Data={filterData} />
  );
};

export default SearchItem;

// items: never[]; is not assignable to type intrinsicattributes