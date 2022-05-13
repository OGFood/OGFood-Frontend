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

const Transition = forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const RecipeModal = ({ recipe }) => {
	const [open, setOpen] = useRecoilState(recipeModalState)

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			<Button variant="text" onClick={handleClickOpen}>
				View Recipe
			</Button>
			<Dialog
				fullWidth={true}
				maxWidth={"lg"}
				open={open}
				TransitionComponent={Transition}
				keepMounted
				onClose={handleClose}
				BackdropProps={{ style: { backgroundColor: "rgba(0,0,0,0.2)" } }}
			>
				<Card sx={{ minHeight: "80vh" }}>
					<CardMedia
						component="img"
						height="140"
						image={recipe.imgSrc}
						alt={recipe.name}
					/>
					<CardContent>
						<Typography> {recipe.name}</Typography>
					</CardContent>
				</Card>
			</Dialog>
		</>
	);
}

export default RecipeModal