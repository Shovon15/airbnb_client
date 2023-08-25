import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Typography, Tooltip } from "@material-tailwind/react";
import { useProductContext } from "../context/ProductProvider";

const Items = () => {
	const { items } = useProductContext();
	console.log(items, "items");

	return (
		<div className="flex gap-2 flex-wrap justify-center py-5">
			{items.map((item) => (
				<>
					<Card className="w-60">
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
					{/* <div className="bg-slate-400 max-h-44  rounded-md">
						<img className="rounded-md w-12" src={item.image} alt="..." />
						<p>{item.name}</p>
					</div> */}
				</>
			))}
			<div></div>
		</div>
	);
};

export default Items;
