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



const MenuDrawer = () => {

	//TODO: Temporary on small screen sizes, permanent on larger screen sizes

	const [openMenu, setOpenMenu] = useRecoilState(openMenuDrawerState)

	const headerBreakpoint = useMediaQuery("(min-width:288px")
	const drawerWidth = 300;

	return (

		<Drawer anchor="left"
			open={openMenu}
			onClose={() => setOpenMenu(false)}
			sx={{
				width: drawerWidth, flexShrink: 0,
				[`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', backgroundColor: "mainbg.main" },

			}}
		>
			{!headerBreakpoint ? <Toolbar sx={{ paddingTop: "7.5rem" }} /> : <Toolbar sx={{ paddingTop: "4.7rem" }} />}

			<Box maxWidth="100%" backgroundColor="" height="100%" flexDirection="column"
				sx={{ boxShadow: "5px 5px 5px inset black, -5px -5px 5px inset black" }}
			>
				<Box padding="1rem">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus vero unde eaque omnis officia, voluptate ipsa itaque similique nostrum cumque molestias laudantium consequuntur minus quis aspernatur esse! Possimus, distinctio vitae!
				</Box>
				<Box paddingLeft="1rem">
					<Typography> Item 1 </Typography>
					<Typography> Item 2 </Typography>
					<Typography> Item 3 </Typography>
				</Box>


			</Box>

			<Box sx={{ verticalAlign: "middle", justifyContent: "center", display: "flex" }}>
				<img src={CompanyLogo} height="45px" style={{ paddingBottom: "5px" }}></img>
			</Box>
		</Drawer>
	)
}

export default MenuDrawer