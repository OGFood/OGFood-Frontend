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



const MenuDrawer = () => {

	//TODO: Temporary on small screen sizes, permanent on larger screen sizes

	const [openMenu, setOpenMenu] = useRecoilState(openMenuDrawerState)

	const smallerThan300px = useMediaQuery("(min-width:300px")
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
			{smallerThan300px ? <Toolbar sx={{ paddingTop: "8rem" }} /> : <Toolbar sx={{ paddingTop: "10rem" }} />}

			{/* <Box maxWidth="99%" backgroundColor="" height="100%" boxShadow="5px 5px 5px inset black" sx={{ flexDirection: "column", whiteSpace: "normal" }}> */}
			<Typography> Hii </Typography>
			<Typography> Hii </Typography>
			<Typography> Hii </Typography>
			<Typography> Hii </Typography>
			{/* </Box> */}

		</Drawer>
	)
}

export default MenuDrawer