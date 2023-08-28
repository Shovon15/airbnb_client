import { useProductContext } from "../context/ProductProvider";
import CardSkeleton from "../components/card/CardSkeleton";
import ItemCard from "../components/card/ItemCard";

const Items = () => {
	const { items, isItemLoading } = useProductContext();

	return (
		<div className="flex gap-2 flex-wrap justify-center py-5">
			{isItemLoading === true ? (
				<>
					<CardSkeleton />
				</>
			) : (
				items.map((item, i) => <ItemCard item={item} key={i} />)
			)}
			<div></div>
		</div>
	);
};

export default Items;
