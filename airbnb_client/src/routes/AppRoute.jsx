import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import FilterResult from "../pages/FilterResult";

const AppRoute = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<MainLayout />}>
					<Route path="/" element={<Home />}></Route>
					<Route path="/filter" element={<FilterResult />}></Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default AppRoute;
