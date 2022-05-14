import { useState, forwardRef } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Box from "@mui/material/Box";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Collapse from '@mui/material/Collapse';
import Dialog from "@mui/material/Dialog";
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { useRecoilState } from "recoil"
import recipeModalState from "../atoms/recipeModalState";
import { IconButton, Toolbar } from "@mui/material";
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

const Transition = forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const RecipeModal = ({ recipe }) => {
	const [open, setOpen] = useRecoilState(recipeModalState)

	// TODO: Grid layout with columns for text areas / icons 
	// TODO: Text: Ingredients + amount + symbol/icon. 
	// 			   SUPER DUPER CLEAR INSTRUCTIONS


	const handleClose = () => {
		setOpen(false);
	};

	/**
	 * Icons as <i> since I can't be bothered installing another package:
	 * 			
			{<span style={{ color: "" }}><i class="fa-solid fa-bowl-rice fa-xl"></i></span>}
			{<span style={{ color: "" }}><i class="fa-solid fa-cubes-stacked fa-xl"></i></span>}
			{<span style={{ color: "" }}><i class="fa-solid fa-seedling fa-xl"></i></span>}
			{<span style={{ color: "" }}><i class="fa-solid fa-utensils fa-xl"></i></span>}
			{<span style={{ color: "" }}><i class="fa-regular fa-clock fa-xl"></i></span>}
			{<span style={{ color: "" }}><i class="fa-solid fa-clock fa-xl"></i></span>}
	 */

	return (
		<Dialog
			fullWidth={true}
			maxWidth={"md"}
			open={open}
			TransitionComponent={Transition}

			keepMounted
			onClose={handleClose}
			BackdropProps={{ style: { backgroundColor: "rgba(0,0,0,0.2)" } }}
		>
			<Card sx={{ minHeight: "80vh" }}>
				<IconButton onClick={() => handleClose()} sx={{ color: "mainbg.main", position: "absolute", right: "0", fontSize: "4em" }}>
					<CancelOutlinedIcon fontSize="4em" sx={{ filter: "drop-shadow(0 0 2px black)" }}></CancelOutlinedIcon>
				</IconButton>
				<CardMedia
					component="img"
					height="300"
					image={recipe.imgSrc}
					alt={recipe.name}
				/>

				<CardContent>
					<Grid container >
						<Grid item>
							<Typography variant="h4" component="h2" > {recipe.name} </Typography>

						</Grid>
						<Grid item>

						</Grid>
					</Grid>
				</CardContent>
			</Card>
		</Dialog>
	);
}

export default RecipeModal