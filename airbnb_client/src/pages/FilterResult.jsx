import { useProductContext } from "../context/ProductProvider";
import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";

const FilterResult = () => {
	const { filterItem } = useProductContext();

	return (
		<div>
			<p className="text-gray-500 font-semibold text-lg p-5">
				total result: {filterItem.length === 0 ? <span>0</span> : <span>{filterItem.count}</span>}
			</p>
			<div className="flex gap-2 flex-wrap justify-center py-5">
				{filterItem.length === 0 ? (
					<Typography variant="body1">Item not found</Typography>
				) : (
					filterItem.items.map((item, i) => (
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
		</div>
	);
};

export default FilterResult;
