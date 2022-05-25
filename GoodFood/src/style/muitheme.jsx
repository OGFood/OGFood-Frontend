import { Dialog } from "@mui/material";
import { createTheme, responsiveFontSizes } from "@mui/material/styles"

const defaultTheme = createTheme();

// Overrides the default MUI-theme. View the documentation for usage. Can be used to change default styling of components/palettes/typography/etc.

let theme = createTheme({
	breakpoints: {
		values: {
			xs: 0,
			sm: 340,
			md: 600,
			lg: 900,
			xl: 1536,
		},
	},
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
	components: {
		MuiCssBaseline: {
			styleOverrides: {

				body: {
					"&::-webkit-scrollbar": {
						backgroundColor: "#fff",
						width: "15px"
					},
					"&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": { //the scroll thingy
						borderRadius: 10,
						backgroundColor: '#888',
						border: "3px solid #fff",

					},
					'&::-webkit-scrollbar-thumb:hover': {
						background: '#555'
					}
				}
			}
		}
	}
})

theme = responsiveFontSizes(theme)


export default theme;