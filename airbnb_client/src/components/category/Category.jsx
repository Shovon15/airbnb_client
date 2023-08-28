/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Button, IconButton } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../utils/fetchApi";
import { useProductContext } from "../../context/ProductProvider";
import Filter from "../../pages/Filter";
import { BsFilterRight } from "react-icons/bs";
import CategorySkeleton from "./CategorySkeleton";

const Category = ({ category }) => {
	const [open, setOpen] = useState(false);
	const { categories, items, handleCategory, selectedCategory, isLoading } = useProductContext();

	const handleOpen = () => setOpen(!open);

	return (
		<div className="sticky top-20 z- bg-white flex gap-5 justify-center py-3">
			{isLoading === true ? (
				<>
					<CategorySkeleton />
				</>
			) : (
				categories.map((category, i) => (
					<div
						key={i}
						onClick={() => handleCategory(category.category_name)}
						className={`flex flex-col items-center p-2 cursor-pointer ${
							selectedCategory === category.category_name ? "border-b-2 border-gray-800" : ""
						}`}
					>
						<img className="w-6" src={category.icon} alt={`Icon for ${category.category_name}`} />
						<p>{category.category_name}</p>
					</div>
				))
			)}
			<div className="my-auto">
				<Button
					onClick={handleOpen}
					className="flex items-center gap-2 px-3 border-gray-200 focus:ring-0"
					variant="outlined"
				>
					<BsFilterRight className="w-5 h-5" />
					Filter
				</Button>
			</div>

			<Filter handleOpen={handleOpen} open={open}></Filter>
		</div>
	);
};

export default Category;
