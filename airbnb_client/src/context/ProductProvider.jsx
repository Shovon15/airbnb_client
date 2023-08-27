/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { createContext, useContext, useEffect, useState } from "react";
import api from "../utils/fetchApi";

export const ProductContext = createContext();

export function useProductContext() {
	return useContext(ProductContext);
}

const ProductProvider = ({ children }) => {
	const [categories, setCategories] = useState([]);
	const [items, setItems] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState(null);
	const [filterItem, setFilterItem] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isItemLoading, setIsItemLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		api.get("/category")
			.then((res) => {
				const data = res.data?.payload?.category;
				setCategories(data);

				if (data.length > 0) {
					handleCategory(data[0].category_name);
				}

				setIsLoading(false);
			})
			.catch((err) => {
				console.log(err);
				setIsLoading(true);
			});
	}, []);

	useEffect(() => {
		setIsItemLoading(true);
		if (selectedCategory) {
			api.get(`category/${selectedCategory}`)
				.then((res) => {
					const data = res.data.payload?.items;
					setItems(data);
					setIsItemLoading(false);
				})
				.catch((err) => {
					console.log(err);
					setIsItemLoading(false);
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
		filterItem,
		setFilterItem,
		isLoading,
		setIsLoading,
		isItemLoading,
	};

	return <ProductContext.Provider value={productInfo}>{children}</ProductContext.Provider>;
};

export default ProductProvider;
