import { useProductContext } from "../context/ProductProvider";

import ItemCard from "../components/card/ItemCard";
import { Typography } from "@material-tailwind/react";

const FilterResult = () => {
	const { filterItem } = useProductContext();

	return (
		<div>
			<p className="text-gray-500 font-semibold text-lg p-5">
				total result: {filterItem.length === 0 ? <span>0</span> : <span>{filterItem.count}</span>}
			</p>
			<div className="flex gap-2 flex-wrap justify-center py-5">
				{filterItem.length === 0 ? (
					<Typography className="font-bold text-xl">Item not found</Typography>
				) : (
					filterItem.items.map((item, i) => <ItemCard item={item} key={i} />)
				)}
			</div>
		</div>
	);
};

export default FilterResult;
