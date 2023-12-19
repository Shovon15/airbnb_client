/* eslint-disable react/prop-types */
import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";

const ItemCard = ({ item }) => {
	// console.log(item);

	const checkinDate = new Date(item?.checkin_avalable);
	const checkoutDate = new Date(item?.checkout_avalable);

	// Format the dates
	const checkinFormatted = `${checkinDate
		.toLocaleString("default", { month: "long" })
		.substring(0, 3)} ${checkinDate.getDate()}`;
	const checkoutFormatted = `${checkoutDate
		.toLocaleString("default", { month: "long" })
		.substring(0, 3)} ${checkoutDate.getDate()}`;

	return (
		<Card className="w-60">
			<CardHeader floated={false} className="max-h-44 m-0">
				<img className="h-44" src={item.image} alt="profile-picture" />
			</CardHeader>
			<CardBody className="text-start p-2">
				<Typography variant="h6" color="blue-gray" className="">
					{item.name}
				</Typography>

				<Typography variant="small" color="blue-gray" className="mb-2 flex gap-2">
					{item.location}
				</Typography>
				<Typography variant="h6" color="blue-gray" className="mb-2">
					${item.price} <span className="text-sm font-thin">night</span>
				</Typography>
				<Typography variant="paragraph" color="blue-gray" className="mb-2">
					{checkinFormatted}-{checkoutFormatted}
				</Typography>
				{/* <div className="grid grid-cols-2 gap-2">
					
					<Typography variant="small" color="blue-gray" className="mb-2 flex gap-1">
						<MdOutlineMeetingRoom className=" w-5 h-5" />: {item.room}
					</Typography>
					<Typography variant="small" color="blue-gray" className="mb-2 flex gap-1">
						<LiaBedSolid className=" w-5 h-5" />:{item.bed}
					</Typography>
					<Typography variant="small" color="blue-gray" className="mb-2 flex gap-1">
						<LiaBathSolid className=" w-5 h-5" />:{item.bathroom}
					</Typography>
				</div> */}
			</CardBody>
		</Card>
	);
};

export default ItemCard;
