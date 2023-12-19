/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import { Button, Dialog, DialogHeader, DialogBody, DialogFooter, IconButton } from "@material-tailwind/react";
import { RxCross2 } from "react-icons/rx";
import { BsHouseDoor } from "react-icons/bs";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { MdOutlineWarehouse } from "react-icons/md";
import { RiHotelLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getWithParams } from "../utils/fetchApi";
import { useProductContext } from "../context/ProductProvider";

export function Filter({ handleOpen, open }) {
	const { filterItem, setFilterItem } = useProductContext();

	const [minValue, setMinValue] = useState(10);
	const [maxValue, setMaxValue] = useState(400);
	const [selectedBedRoomValue, setSelectedBedRoomValue] = useState("any");
	const [selectedBedValue, setSelectedBedValue] = useState("any");
	const [selectedBathRoomValue, setSelectedBathRoomValue] = useState("any");
	const [selectedPropertyTypes, setSelectedPropertyTypes] = useState([]);

	const [error, setError] = useState("");
	// console.log(error);
	const navigate = useNavigate();

	const BedRoomValue = ["any", "1", "2", "3", "4", "5", "6", "7", "8"];
	const BedValue = ["any", "1", "2", "3", "4", "5", "6", "7", "8"];
	const BathRoomValue = ["any", "1", "2", "3", "4", "5", "6", "7", "8"];

	const handleFilterResult = () => {
		handleOpen(true);
		navigate("/filter");
	};

	const handleBedRoomValue = (value) => setSelectedBedRoomValue(value);

	const handleBedValue = (value) => setSelectedBedValue(value);

	const handleBathRoomValue = (value) => setSelectedBathRoomValue(value);

	// -------------------------------------

	const handleMinChange = (event) => {
		const value = parseInt(event.target.value);

		if (isNaN(value)) {
			setMinValue("");
		} else {
			setMinValue(value);
		}
	};

	const handleMaxChange = (event) => {
		const value = parseInt(event.target.value);
		if (isNaN(value)) {
			setMaxValue("");
		} else {
			setMaxValue(value);
		}
	};
	const handleMinBlur = () => {
		if (minValue < 10 || isNaN(minValue)) {
			setMinValue(10);
		} else {
			setMinValue(minValue);
		}
	};
	const handleMaxBlur = () => {
		if (maxValue < 400 || isNaN(maxValue)) {
			setMaxValue(400);
		} else {
			setMaxValue(maxValue);
		}
	};
	// -----------------------------

	const handlePropertyTypeClick = (propertyType) => {
		setSelectedPropertyTypes((prevPropertyTypes) => {
			if (prevPropertyTypes.includes(propertyType)) {
				return prevPropertyTypes.filter((type) => type !== propertyType);
			} else {
				return [...prevPropertyTypes, propertyType];
			}
		});
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				const params = {
					property_type: selectedPropertyTypes,
					room: selectedBedRoomValue,
					bed: selectedBedValue,
					bathroom: selectedBathRoomValue,
					minPrice: minValue,
					maxPrice: maxValue,
				};

				const response = await getWithParams("item/filtered", { params });
				const data = response.data?.payload;
				// console.log(response.data);
				setFilterItem(data);
			} catch (err) {
				setError(err.response?.data.message);
				setFilterItem([]); // Clear the data in case of an error
			}
		};

		fetchData();
	}, [selectedPropertyTypes, selectedBedRoomValue, selectedBedValue, selectedBathRoomValue, minValue, maxValue]);

	return (
		<>
			<Dialog
				size={"lg"}
				open={open}
				handler={handleOpen}
				animate={{
					mount: { scale: 1, y: 0 },
					unmount: { scale: 0.9, y: -100 },
				}}
			>
				<DialogHeader className="flex">
					<IconButton
						variant="outlined"
						className="flex-none left-2 rounded-full border-none bg-gray-100 focus:ring-0"
						onClick={handleOpen}
					>
						<RxCross2 className="w-5 h-5" />
					</IconButton>
					<p className="grow text-center">Filters</p>
				</DialogHeader>
				<DialogBody divider className="overflow-auto h-96 px-5">
					{/* ------------------------------------------------------------ */}
					<p className="font-semibold text-xl text-black py-5">Price range</p>
					<div className="flex gap-5 justify-center">
						<div>
							<label>Minimum</label>
							<input
								style={{ borderRadius: " 6px" }}
								type="text"
								value={minValue}
								onChange={handleMinChange}
								onBlur={handleMinBlur}
								className="border p-1 border-gray-500 "
							/>
						</div>
						<div>
							<label>Maximum</label>
							<input
								style={{ borderRadius: " 6px" }}
								type="text"
								value={maxValue}
								onChange={handleMaxChange}
								onBlur={handleMaxBlur}
								className="border p-1 border-gray-500"
							/>
						</div>
					</div>

					{/* ---------------------------------------------------------------- */}
					<p className="font-semibold text-xl text-black py-5">Rooms and beds</p>
					<div className="p-2">
						<p className="p-2">Bedrooms</p>
						<div className="flex gap-3 pl-5">
							{BedRoomValue.map((value, index) => (
								<button
									key={index}
									onClick={() => handleBedRoomValue(value)}
									className={
										selectedBedRoomValue === value
											? "selected bg-gray-900 text-white  px-5 py-1 rounded-full"
											: "bg-white ring-1 ring-gray-500  px-5 py-1 rounded-full"
									}
								>
									{value}
								</button>
							))}
						</div>
					</div>

					<div className="p-2">
						<p className="p-2">Beds</p>
						<div className="flex gap-3 pl-5">
							{BedValue.map((value, index) => (
								<button
									key={index}
									onClick={() => handleBedValue(value)}
									className={
										selectedBedValue === value
											? "selected bg-gray-900 text-white  px-5 py-1 rounded-full"
											: "bg-white ring-1 ring-gray-500  px-5 py-1 rounded-full"
									}
								>
									{value}
								</button>
							))}
						</div>
					</div>

					<div className="p-2">
						<p className="p-2">BathRooms</p>
						<div className="flex gap-3 pl-5">
							{BathRoomValue.map((value, index) => (
								<button
									key={index}
									onClick={() => handleBathRoomValue(value)}
									className={
										selectedBathRoomValue === value
											? "selected bg-gray-900 text-white  px-5 py-1 rounded-full"
											: "bg-white ring-1 ring-gray-500  px-5 py-1 rounded-full"
									}
								>
									{value}
								</button>
							))}
						</div>
					</div>

					{/* ---------------------------------------------- */}
					<div className="py-5">
						<p className="p-2 text-xl font-semibold text-black">Property type</p>

						<div className="flex justify-center gap-6">
							<button
								onClick={() => handlePropertyTypeClick("house")}
								className={`${
									selectedPropertyTypes.includes("house")
										? "selected  ring-2 ring-black"
										: " ring-1  ring-gray-500 hover:ring-gray-700 "
								} w-36 h-28 flex flex-col justify-between py-5 px-2 text-black rounded-lg bg-white`}
							>
								<BsHouseDoor className="w-7 h-7" />
								House
							</button>
							<button
								onClick={() => handlePropertyTypeClick("apartment")}
								className={`${
									selectedPropertyTypes.includes("apartment")
										? "selected  ring-2 ring-black"
										: " ring-1  ring-gray-500 hover:ring-gray-700 "
								} w-36 h-28 flex flex-col justify-between py-5 px-2 text-black rounded-lg bg-white`}
							>
								<HiOutlineBuildingOffice2 className="w-7 h-7" />
								Apartment
							</button>
							<button
								onClick={() => handlePropertyTypeClick("guesthouse")}
								className={`${
									selectedPropertyTypes.includes("guesthouse")
										? "selected  ring-2 ring-black"
										: " ring-1  ring-gray-500 hover:ring-gray-700 "
								} w-36 h-28 flex flex-col justify-between py-5 px-2 text-black rounded-lg bg-white`}
							>
								<MdOutlineWarehouse className="w-7 h-7" />
								Guesthouse
							</button>
							<button
								onClick={() => handlePropertyTypeClick("hostel")}
								className={`${
									selectedPropertyTypes.includes("hostel")
										? "selected  ring-2 ring-black"
										: " ring-1  ring-gray-500 hover:ring-gray-700 "
								} w-36 h-28 flex flex-col justify-between py-5 px-2 text-black rounded-lg bg-white`}
							>
								<RiHotelLine className="w-7 h-7" />
								Hostel
							</button>
						</div>
					</div>
				</DialogBody>
				<DialogFooter>
					<Button variant="gradient" className="bg-black capitalize" onClick={handleFilterResult}>
						<span>Show {isNaN(filterItem) ? filterItem.count : "0"} places</span>
					</Button>
				</DialogFooter>
			</Dialog>
		</>
	);
}

export default Filter;
