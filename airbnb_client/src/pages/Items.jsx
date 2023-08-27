import { Card, CardHeader, CardBody, Typography } from "@material-tailwind/react";
import { useProductContext } from "../context/ProductProvider";
import CardSkeleton from "../components/card/CardSkeleton";

const Items = () => {
	const { items, isItemLoading } = useProductContext();

	return (
		<div className="flex gap-2 flex-wrap justify-center py-5">
			{isItemLoading === true ? (
				<>
					<CardSkeleton />
				</>
			) : (
				items.map((item, i) => (
					<Card key={i} className="w-60">
						<CardHeader floated={false} className="max-h-44 m-0">
							<img className="" src={item.image} alt="profile-picture" />
						</CardHeader>
						<CardBody className="text-start">
							<Typography variant="h6" color="blue-gray" className="mb-2">
								{item.name}
							</Typography>
							<Typography variant="h6" color="blue-gray" className="mb-2">
								${item.price}
							</Typography>
						</CardBody>
					</Card>
				))
			)}
			<div></div>
		</div>
	);
};

export default Items;
