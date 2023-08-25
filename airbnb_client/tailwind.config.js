const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#FF385C",
				// secondary: "#121212",
				// buttonColor: "#2196F3",
				// textPrimary: "#001F3F",
			},
		},
	},
	plugins: [],
});

//#FF385C
