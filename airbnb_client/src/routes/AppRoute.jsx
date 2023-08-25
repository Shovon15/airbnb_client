import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";

const AppRoute = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<MainLayout />}>
					<Route path="/" element={<Home />}></Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default AppRoute;
