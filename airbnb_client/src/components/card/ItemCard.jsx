import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";
import { CiLocationOn } from "react-icons/ci";
import { LiaBedSolid } from "react-icons/lia";
import { MdOutlineMeetingRoom } from "react-icons/md";
import { LiaBathSolid } from "react-icons/lia";

const ItemCard = ({ item }) => {
	return (
		<Card className="w-60">
			<CardHeader floated={false} className="max-h-44 m-0">
				<img className="h-44" src={item.image} alt="profile-picture" />
			</CardHeader>
			<CardBody className="text-start p-2">
				<Typography variant="h6" color="blue-gray" className="mb-2">
					{item.name}
				</Typography>
				<Typography variant="h6" color="blue-gray" className="mb-2">
					${item.price}
				</Typography>
				<div className="grid grid-cols-2 gap-2">
					<Typography variant="small" color="blue-gray" className="mb-2 flex gap-2">
						<CiLocationOn className="w-5 h-5" />:{item.location}
					</Typography>
					<Typography variant="small" color="blue-gray" className="mb-2 flex gap-1">
						<MdOutlineMeetingRoom className=" w-5 h-5" />: {item.room}
					</Typography>
					<Typography variant="small" color="blue-gray" className="mb-2 flex gap-1">
						<LiaBedSolid className=" w-5 h-5" />:{item.bed}
					</Typography>
					<Typography variant="small" color="blue-gray" className="mb-2 flex gap-1">
						<LiaBathSolid className=" w-5 h-5" />:{item.bathroom}
					</Typography>
				</div>
			</CardBody>
		</Card>
	);
};

export default ItemCard;
