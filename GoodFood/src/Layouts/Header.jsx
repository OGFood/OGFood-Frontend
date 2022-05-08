import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from "@mui/material/Container"
import Logo from "../assets/images/logo-notext-white-small.png"
import MenuIcon from '@mui/icons-material/Menu';
import { margin, textAlign } from '@mui/system';


// TODO: Add Menu Icon + Drawer when more functionality is in place (ex login/user information)
const Header = () => {

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar sx={{ justifyContent: "center" }}>
					<IconButton size='small'  >
						<img src={Logo} ></img>
					</IconButton>
					<Typography
						variant="h2"
						component="h1"
						textAlign={"center"}
						color={"white"}>
						God Food
					</Typography>
				</Toolbar>
			</AppBar>
		</Box >
	)


}

export default Header