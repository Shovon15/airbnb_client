import { Link, Navigate, useNavigate } from "react-router-dom";
import logo from "../../assets/airbnb-logo.svg";
import Category from "../category/Category";
import { Collapse, IconButton, Menu, MenuHandler, MenuList, Typography } from "@material-tailwind/react";
import { useEffect, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./nav.css";
import { RxCross2 } from "react-icons/rx";
import { HiOutlinePlus } from "react-icons/hi";
import { HiOutlineMinus } from "react-icons/hi";
import moment from "moment";
import api from "../../utils/fetchApi";
import { useProductContext } from "../../context/ProductProvider";
import { showErrorToast } from "../toaster";

const Nav = () => {
	let menuRef = useRef();
	const navigate = useNavigate();

	const initialDate = moment(new Date()).format("yyyy-MM-DD");
	const initialSearch = {
		destination: "",
		from_date: initialDate,
		to_date: initialDate,
	};

	const { searchItem, setSearchItem } = useProductContext();
	const [open, setOpen] = useState(false);
	const [searchQuery, setSearchQuery] = useState(initialSearch);
	const [adaltCount, setAdaltCount] = useState(0);
	const [childrenCount, setChildrenCount] = useState(0);
	const [infantsCount, setInfantsCount] = useState(0);
	const [totalCount, setTotalCount] = useState(0);
	const [searchError, setSearchError] = useState("");

	const toggleOpen = () => setOpen((cur) => !cur);
	// useEffect(() => {
	// 	let handler = (e) => {
	// 		if (!menuRef.current.contains(e.target)) {
	// 			setOpen(false);
	// 		}
	// 	};
	// 	document.addEventListener("mousedown", handler);
	// 	return () => {
	// 		document.removeEventListener("mousedown", handler);
	// 	};
	// });

	const increasetCount = (count, setCount) => {
		setCount(count + 1);
	};

	const decreasetCount = (count, setCount) => {
		if (count > 0) {
			setCount(count - 1);
		}
	};

	useEffect(() => {
		setTotalCount(adaltCount + childrenCount);
	}, [adaltCount, childrenCount]);

	const handleSearchChange = (name, value) => {
		if (name === "from_date" || name === "to_date") {
			value = value ? moment(value).format("yyyy-MM-DD") : "";
		}
		setSearchQuery({
			...searchQuery,
			[name]: value,
		});
	};
	const handleSearch = () => {
		const payload = {
			...searchQuery,
			adaltguest: totalCount,
			infants: infantsCount,
		};

		const fetchData = async () => {
			try {
				const response = await api.get("/item/search", { params: payload });
				const data = response.data?.payload;
				setSearchItem(data);
				navigate("/search");
			} catch (err) {
				const error = err.response?.data.message;
				setSearchError(error);
				showErrorToast(error);
			}
		};

		fetchData();
	};

	const user = { name: "rahim" };

	const navCollapse = (
		<Collapse open={open} className="pt-2">
			<div className="mx-10 bg-white flex border rounded-full border-gray-400 shadow-gray-300 items-center  ">
				<div className="pl-10 pr-5 py-2 hover:bg-gray-200 rounded-full">
					<Typography variant="small">Where</Typography>
					<input
						style={{
							margin: 0,
							paddingLeft: 2,
							paddingRight: 2,
							paddingTop: 0,
							paddingBottom: 0,
						}}
						type="text"
						name="destination"
						onChange={(e) => handleSearchChange(e.target.name, e.target.value)}
						placeholder="Search destination"
						className="outline-none border-none bg-transparent"
					/>
				</div>
				<div className="hover:bg-gray-200 rounded-full text-center py-2">
					<Typography variant="small">Check in</Typography>
					<DatePicker
						style={{ margin: 0, padding: 0 }}
						dateFormat="dd-MM-yyyy"
						selected={searchQuery.from_date ? new Date(searchQuery.from_date) : ""}
						onChange={(date) => handleSearchChange("from_date", date)}
						className="outline-none date-picker"
					/>
				</div>
				<div className="hover:bg-gray-200 rounded-full text-center py-2">
					<Typography variant="small">Check out</Typography>
					<DatePicker
						style={{ margin: 0, padding: 0 }}
						dateFormat="dd-MM-yyyy"
						selected={searchQuery.to_date ? new Date(searchQuery.to_date) : ""}
						onChange={(date) => handleSearchChange("to_date", date)}
						className="outline-none date-picker "
					/>
				</div>
				<div className="relative px-10 py-2 hover:bg-gray-200 rounded-full">
					<div className=" w-28 ">
						<Menu
							dismiss={{
								itemPress: false,
							}}
						>
							<MenuHandler className="cursor-pointer py-3">
								<Typography variant="small">Add guest</Typography>
							</MenuHandler>
							<MenuList className="w-96 flex flex-col gap-5 ">
								<div className=" flex justify-between  p-2 text-black hover:outline-none">
									<div>
										<Typography variant="h6">Adult</Typography>
										<p>Ages 13 or above</p>
									</div>
									<div className="flex gap-2 items-center">
										<IconButton
											size="sm"
											variant="outlined"
											className="rounded-full border-gray-400"
											onClick={() => decreasetCount(adaltCount, setAdaltCount)}
										>
											<HiOutlineMinus className="" />
										</IconButton>
										<Typography variant="h6">{adaltCount}</Typography>
										<IconButton
											size="sm"
											variant="outlined"
											className="rounded-full border-gray-400"
											onClick={() => increasetCount(adaltCount, setAdaltCount)}
										>
											<HiOutlinePlus />
										</IconButton>
									</div>
								</div>
								<div className=" flex justify-between  p-2 text-black hover:outline-none">
									<div>
										<Typography variant="h6">Children</Typography>
										<p>Ages 2–12</p>
									</div>
									<div className="flex gap-2 items-center">
										<IconButton
											size="sm"
											variant="outlined"
											className="rounded-full border-gray-400"
											onClick={() => decreasetCount(childrenCount, setChildrenCount)}
										>
											<HiOutlineMinus className="" />
										</IconButton>
										<Typography variant="h6">{childrenCount}</Typography>
										<IconButton
											size="sm"
											variant="outlined"
											className="rounded-full border-gray-400"
											onClick={() => increasetCount(childrenCount, setChildrenCount)}
										>
											<HiOutlinePlus />
										</IconButton>
									</div>
								</div>
								<div className=" flex justify-between  p-2 text-black hover:outline-none">
									<div>
										<Typography variant="h6">Infants</Typography>
										<p>Under 2</p>
									</div>
									<div className="flex gap-2 items-center">
										<IconButton
											size="sm"
											variant="outlined"
											className="rounded-full border-gray-400"
											onClick={() => decreasetCount(infantsCount, setInfantsCount)}
										>
											<HiOutlineMinus className="" />
										</IconButton>
										<Typography variant="h6">{infantsCount}</Typography>
										<IconButton
											size="sm"
											variant="outlined"
											className="rounded-full border-gray-400"
											onClick={() => increasetCount(infantsCount, setInfantsCount)}
										>
											<HiOutlinePlus />
										</IconButton>
									</div>
								</div>
							</MenuList>
						</Menu>
					</div>
					<button
						onClick={handleSearch}
						className="absolute right-4 top-3 bg-primary text-white p-3 rounded-full"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-5 h-5"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
							/>
						</svg>
					</button>
				</div>
			</div>
		</Collapse>
	);

	return (
		<div ref={menuRef} className="sticky top-0  inset-0 z-50 bg-white ">
			<header className="flex justify-between border-b px-10 py-4 ">
				<Link to={"/"} className="flex items-start gap-1">
					<img className="w-24" src={logo} alt="..." />
				</Link>

				<div className=" ">
					{open ? (
						<div className="text-center">
							<IconButton onClick={toggleOpen} variant="outlined" className="rounded-full">
								<RxCross2 className="w-5 h-5" />
							</IconButton>
						</div>
					) : (
						<div
							onClick={toggleOpen}
							className={`mx-auto flex gap-2 border border-gray-300 rounded-full py-2 px-4 shadow-md shadow-gray-300  cursor-pointer  ${
								open ? "opacity-0 h-0 duration-500 " : "opacity-100 duration-500 h-auto "
							}`}
						>
							<div className="px-2 py-1 border-r border-gray-400">Anywhere</div>
							<div className="px-2 py-1 border-r border-gray-400">Any week</div>
							<div className="px-2 py-1 ">Add guests</div>
							<button className="bg-primary text-white p-2 rounded-full">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-4 h-4"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
									/>
								</svg>
							</button>
						</div>
					)}
					{open && navCollapse}
				</div>

				<Link to="/" className="flex items-start gap-2 border border-gray-300 rounded-full py-2 px-4 h-12">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-6 h-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/>
					</svg>
					<div className="bg-gray-500 text-white rounded-full border border-gray-500 overflow-hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="w-6 h-6 relative top-1"
						>
							<path
								fillRule="evenodd"
								d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
								clipRule="evenodd"
							/>
						</svg>
					</div>
					{!!user && <div>{user.name}</div>}
				</Link>
			</header>
			<Category />
		</div>
	);
};

export default Nav;
