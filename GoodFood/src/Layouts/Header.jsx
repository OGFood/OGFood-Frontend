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

// TODO: Add Menu Icon + Drawer when more functionality is in place (ex login/user information)
const Header = () => {

	const isScreenSizeSmall = useMediaQuery(useTheme().breakpoints.down('sm'));

	return (
		<AppBar position="static">

			<Toolbar sx={{ justifyContent: "" }}>
				{!isScreenSizeSmall && <IconButton size="large" sx={{ color: "white", fontSize: "2.5rem" }}>
					<MenuIcon fontSize='5rem' />
				</IconButton>}

				<Box flexDirection="column" flexGrow="1" justifyContent="center" alignItems="center">

					<Typography
						variant="h2"
						component="h1"
						textAlign={"center"}
						color={"white"}
					>
						<IconButton size='small' disableRipple={true} focusRipple={false} sx={{ ":hover": { cursor: "inherit" } }}>
							{!isScreenSizeSmall ? <img src={Logo} alt="God food logo" ></img> : <img src={Logo} style={{ maxWidth: "70px" }} alt="God food logo" ></img>}
						</IconButton>
						God Food
					</Typography>
				</Box>
				{isScreenSizeSmall && <IconButton size="md" sx={{ color: "white", fontSize: "2.5rem" }}>
					<MenuIcon fontSize='5rem' />
				</IconButton>}
			</Toolbar>
		</AppBar>
	)


}

export default Header