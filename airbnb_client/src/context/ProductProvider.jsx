/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */



import { createContext, useContext, useEffect, useState } from "react";
import api from "../utils/fetchApi";

// Create the ProductContext
export const ProductContext = createContext();

// Create a custom hook to use the ProductContext
export function useProductContext() {
  return useContext(ProductContext);
}

// Create the ProductProvider component
const ProductProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    // Fetch categories from the API
    api.get("/category")
      .then((res) => {
        const data = res.data?.payload?.category;
        setCategories(data);

        if (data.length > 0) {
          // Set the default selected category
          handleCategory(data[0].category_name);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    // Fetch items based on the selected category
    if (selectedCategory) {
      api.get(`category/${selectedCategory}`)
        .then((res) => {
          const data = res.data.payload.items;
          setItems(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [selectedCategory]);

  const handleCategory = (category) => {
    setSelectedCategory(category);
  };

  const productInfo = {
    categories,
    items,
    selectedCategory,
    handleCategory,
  };

  return (
    <ProductContext.Provider value={productInfo}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;