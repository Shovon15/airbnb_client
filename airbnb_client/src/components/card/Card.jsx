import React from "react";

const Card = ({ item }) => {
	return (
		<div className="max-w-96 ">
			<p>{item.name}</p>
			<img className="w-96 rounded-md" src={item.image} alt="..." />
		</div>
	);
};

export default Card;
