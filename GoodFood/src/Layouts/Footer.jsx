import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from "@mui/material/Container"
import Logo from "../assets/images/logo-notext-white-small.png"
import MenuIcon from '@mui/icons-material/Menu';
import CompanyLogo from "../assets/images/c-logo.png"
import Link from "@mui/material/Link"


const Footer = () => {
	return (
		<Container sx={{ bgcolor: "primary.light", boxShadow: "0px 3px 10px black" }} maxWidth="false">
			<Toolbar sx={{ justifyContent: "center" }}>
				<Typography textAlign={"middle"} sx={{ verticalAlign: "middle" }}>
					©  2022
				</Typography>
				<Box sx={{ verticalAlign: "middle" }}>
					<Link href="mailto:godfood@theplate.com"><img src={CompanyLogo} height="45px" style={{ paddingBottom: "2px" }}></img></Link>
				</Box>
			</Toolbar>
		</Container>
	)
}

export default Footer