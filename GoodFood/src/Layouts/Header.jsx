import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from "@mui/material/Container"
import Logo from "../assets/images/logo-notext-white-small.png"
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import MenuDrawer from "../components/MenuDrawer"
import { useRecoilState } from "recoil";
import openMenuDrawerState from "../atoms/openMenuDrawerState";

// TODO: Add Menu Icon + Drawer when more functionality is in place (ex login/user information)
const Header = () => {

	const [openMenu, setOpenMenu] = useRecoilState(openMenuDrawerState)

	const handleMenuToggle = () => {
		setOpenMenu(!openMenu)
	}

	const isScreenSizeSmall = useMediaQuery(useTheme().breakpoints.down('sm'));


	return (
		<>
			<AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, }}>

				<Toolbar sx={{ justifyContent: "" }}>
					{!isScreenSizeSmall && <IconButton onClick={() => handleMenuToggle()} size="large" sx={{ color: "white", fontSize: "2.5rem" }}>
						<MenuIcon fontSize='5rem' />
					</IconButton>}

					<Box flexDirection="column" flexGrow="1" justifyContent="center" alignItems="center">

						<Typography
							variant="h2"
							component="h1"
							textAlign={"center"}
							color={"white"}
							sx={{ textAlign: { xs: "left", sm: "center" }, verticalAlign: "middle" }}

						>

							{!isScreenSizeSmall ? <img src={Logo} style={{ verticalAlign: "middle" }} alt="God food logo" ></img> : <img src={Logo} style={{ maxWidth: "75px", verticalAlign: "middle" }} alt="God food logo" ></img>}

							God Food
						</Typography>
					</Box>
					{isScreenSizeSmall && <IconButton size="md" onClick={() => handleMenuToggle()} sx={{ color: "white", fontSize: "2.5rem" }}>
						<MenuIcon fontSize='5rem' />
					</IconButton>}
				</Toolbar>

			</AppBar>

			<Toolbar sx={{ marginTop: "3rem" }} />

			<MenuDrawer />
		</>
	)


}

export default Header