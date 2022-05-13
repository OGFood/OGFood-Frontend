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

	// TODO: Overlay X button on top-right corner of image to close the modal (So it's clear it can be closed even though it already can be closed)
	// TODO: Grid layout with columns for text areas / icons 
	// TODO: Text: Ingredients + amount + symbol/icon. 
	// 			   SUPER DUPER CLEAR INSTRUCTIONS

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};



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
				<IconButton onClick={() => handleClose()} sx={{ position: "absolute", right: "0", fontSize: "5rem" }}>
					<CancelOutlinedIcon fontSize="4rem"></CancelOutlinedIcon>
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