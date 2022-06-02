import { useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Box from "@mui/material/Box";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Collapse from '@mui/material/Collapse';
import Slide from '@mui/material/Slide';
import { useRecoilState } from "recoil";
import openMenuDrawerState from "../atoms/openMenuDrawerState";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import CompanyLogo from "../assets/images/c-logo.png"
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import ContactMailRoundedIcon from '@mui/icons-material/ContactMailRounded';
import openLoginSignUpState from "../atoms/openLoginSignUpState";
import LoginSignUpContainer from "./LoginSignUpContainer";
import userLoggedInState from '../atoms/userLoggedInState';
import openContactFormState from "../atoms/openContactFormState";
import FoodBg from "../assets/images/foodbg.png"

const MenuDrawer = () => {

	//TODO: Temporary on small screen sizes, permanent on larger screen sizes

	const [openMenu, setOpenMenu] = useRecoilState(openMenuDrawerState)
	const [openContainer, setOpenContainer] = useRecoilState(openLoginSignUpState)
	const [openContactForm, setOpenContactForm] = useRecoilState(openContactFormState)
	const [userLoggedIn, setUserLoggedIn] = useRecoilState(userLoggedInState)

	const headerBreakpoint = useMediaQuery("(min-width:285px")
	const fullMenu = useMediaQuery("(min-width:321px")
	const drawerWidth = () => {
		if (!fullMenu) {
			return "100%";
		}
		return "300px";
	}


	const handleOpenLoginContainer = () => {
		// console.log("click")
		setOpenContainer(true)
	}

	const handleOpenContactForm = () => {
		// console.log("click")
		setOpenContactForm(true)
	}

	const switchLabel = userLoggedIn ? "User Settings" : "Sign In | Sign Up"

	const menuItems = [
		{ icon: <AccountCircleRoundedIcon style={{ fontSize: "32px" }} />, label: switchLabel, func: handleOpenLoginContainer },
		{ icon: <ContactMailRoundedIcon style={{ fontSize: "32px" }} />, label: "Contact Us", func: handleOpenContactForm },
	]



	return (

		<Drawer anchor="left"
			open={openMenu}
			variant="temporary"
			onClose={() => setOpenMenu(false)}
			sx={{
				width: drawerWidth, flexShrink: 0,
				[`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', backgroundColor: "mainbg.main", backgroundImage: `url(${FoodBg})` },

			}}
		>
			{!headerBreakpoint ? <Toolbar sx={{ paddingTop: "7.6rem" }} /> : <Toolbar sx={{ paddingTop: "4.7rem" }} />}

			<Box maxWidth="100%" backgroundColor="" height="100%" flexDirection="column"
				sx={{ border: "1px solid", borderLeft: "none" }}
			>
				<Box padding="1rem" backgroundColor="mainbg.main" paddingBottom="2rem" >
					<Typography gutterBottom fontFamily="dacasa" variant="h3" textAlign="center"> God Food is Good Mat</Typography>
					<Typography >
						{/* Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus vero unde eaque omnis officia, voluptate ipsa itaque similique nostrum cumque molestias laudantium consequuntur minus quis aspernatur esse! Possimus, distinctio vitae! */}
						Feel free to create an account and log in to store your ingredients for your next visit!
					</Typography>
				</Box>
				<Box >
					<List sx={{ backgroundColor: "mainbg.main", paddingTop: "0", paddingBottom: "2px", "&:first-of-type": { borderTop: "1px solid" } }}>
						{menuItems.map((menuItem) => (
							<ListItemButton onClick={() => menuItem.func()} key={menuItem.label} sx={{ backgroundColor: "white", "&:hover": { backgroundColor: "primary.light", }, borderBottom: "1px solid" }}>
								<ListItemIcon sx={{ color: "primary.dark" }}>{menuItem.icon}</ListItemIcon>
								<ListItemText primary={menuItem.label} primaryTypographyProps={{ fontWeight: "medium" }} />
							</ListItemButton>
						))}
					</List>

				</Box>
			</Box>

			<Box sx={{ verticalAlign: "middle", justifyContent: "center", display: "flex", borderRight: "1px solid", backgroundColor: "primary.light" }}>
				<img src={CompanyLogo} height="45px" style={{ paddingBottom: "5px" }}></img>
			</Box>
		</Drawer>
	)
}

export default MenuDrawer