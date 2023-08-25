/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../utils/fetchApi";
import { useProductContext } from "../../context/ProductProvider";

const Category = ({ category }) => {
	const { categories, items, handleCategory } = useProductContext();
	console.log(categories, "categories");

	return (
		<div className="sticky top-20 z-20 bg-white flex gap-5 justify-center py-3">
			{categories.map((category, i) => (
				<button
					key={i}
					onClick={() => handleCategory(category.category_name)}
					className="mx-2 bg-white hover:ring-b text-primary rounded-md py-2 px-2 flex flex-col  items-center"
				>
					<img className="w-6" src={category.icon} />
					<p>{category.category_name}</p>
				</button>
			))}
		</div>
	);
};

export default Category;
