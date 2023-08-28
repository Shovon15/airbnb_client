import { ToastContainer } from "react-toastify";
import AppRoute from "./routes/AppRoute";
import "react-toastify/dist/ReactToastify.css";

function App() {
	return (
		<div className="bg-white min-h-screen dark:bg-slate-700 dark:text-white ">
			<div className="max-w-[1490px] mx-auto ">
				<AppRoute />
				<ToastContainer />
			</div>
		</div>
	);
}

export default App;
