import axios from "axios";

const api = axios.create({
	baseURL: "http://localhost:5000/api",
});

api.interceptors.request.use(
	(request) => {
		// console.log(request, "request");
		// req.baseURL = baseURL;
		return request;
	},
	(error) => {
		// Do something with request error
		return Promise.reject(error);
	}
);
api.interceptors.response.use(
	(response) => {
		// console.log(response.data, "res");
		return response;
	},
	(error) => {
		// Do something with request error
		return Promise.reject(error);
	}
);
export default api;
