import React, { createContext, useState} from "react";
import { items } from "../components/Data";

export const ProductContext = createContext();

export const Provider = ({children}) => {
    const [filterItems, setFilterItems] = useState(items);

    const filterByCategory = (category) => {
        console.log("Filtering by category:", category);
        if (category) {
          const filtered = items.filter((product) => product.category === category);
          setFilterItems(filtered);
          console.log("Filtered Items:", filtered);
        } else {
          setFilterItems(items);
          console.log("All Items:", items);
        }
      };
      
    return (
        <ProductContext.Provider value={{filterByCategory, filterItems}}>
            {children}
        </ProductContext.Provider>
    )
}
