import { useProductContext } from "../context/ProductProvider";
import { Typography } from "@material-tailwind/react";
import ItemCard from "../components/card/ItemCard";

const SearchResult = () => {
	const { searchItem } = useProductContext();
	console.log(searchItem, "searchItem");
	return (
		<div>
			<Typography variant="h5">Total search item:{searchItem?.count}</Typography>
			<div className="flex gap-2 flex-wrap justify-center py-5">
				{searchItem.length === 0 ? (
					<Typography className="font-bold text-xl">Item not found</Typography>
				) : (
					searchItem.items.map((item, i) => <ItemCard item={item} key={i} />)
				)}
			</div>
		</div>
	);
};

export default SearchResult;
