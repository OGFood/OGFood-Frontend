import { createTheme } from "@mui/material/styles"

const defaultTheme = createTheme();

const theme = createTheme({
	palette: {
		primary: {
			main: "#A6B727"
		},
		secondary: {
			main: "#325044"
		},
		mainbg: defaultTheme.palette.augmentColor({
			color: { main: "#faf0e6" },
			name: "mainbg"
		}),
		dark: defaultTheme.palette.augmentColor({
			color: { main: "#272b0b" },
			name: "dark"
		})

	},
	typography: {
		h1: {
			fontFamily: "dacasa"
		},
		h2: {
			fontFamily: "dacasa"
		},
		h3: {
			fontFamily: "dacasa"
		},
		fontFamily: ["Open Sans", "Segoe UI", "Tahoma", "sans-serif"].join(",")
	},
})

export default theme;