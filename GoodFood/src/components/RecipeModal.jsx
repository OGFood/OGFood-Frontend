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
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const Transition = forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const RecipeModal = ({ recipe }) => {
	const [open, setOpen] = useRecoilState(recipeModalState)

	// TODO: Grid layout with columns for text areas / icons 
	// TODO: Text: Ingredient amount + Approx time to cook
	// 			   SUPER DUPER CLEAR INSTRUCTIONS
	// TODO: Add proper approxtime into recipe


	const handleClose = () => {
		setOpen(false);
	};

	/**
	 * Icons as <i> since I can't be bothered installing another package:
	 * 			
			{<span style={{ color: "" }}><i className="fa-solid fa-bowl-rice fa-xl"></i></span>}
			{<span style={{ color: "" }}><i className="fa-solid fa-cubes-stacked fa-xl"></i></span>}
			{<span style={{ color: "" }}><i className="fa-solid fa-seedling fa-xl"></i></span>}
			{<span style={{ color: "" }}><i className="fa-solid fa-utensils fa-xl"></i></span>}
			{<span style={{ color: "" }}><i className="fa-regular fa-clock fa-xl"></i></span>}
			{<span style={{ color: "" }}><i class="fa-solid fa-clock fa-xl"></i></span>}

	 */
	const isScreenSizeSmall = useMediaQuery(useTheme().breakpoints.down('sm'));

	return (
		<Dialog

			scroll="body"
			fullWidth={true}
			maxWidth={"md"}
			open={open}
			TransitionComponent={Transition}
			sx={{ minWidth: "100%" }}
			keepMounted
			onClose={handleClose}
			BackdropProps={{ style: { backgroundColor: "rgba(0,0,0,0.1)" } }}
		>
			<Card sx={{ minHeight: "80vh" }}>
				{!isScreenSizeSmall ?
					<IconButton onClick={() => handleClose()} sx={{ color: "mainbg.main", position: "absolute", right: "0", fontSize: "4em" }}>
						<CancelOutlinedIcon fontSize="4em" sx={{ filter: "drop-shadow(0 0 4px black)" }}></CancelOutlinedIcon>
					</IconButton> :
					<IconButton onClick={() => handleClose()} sx={{ color: "primary.light", position: "absolute", right: "0", bottom: "0", fontSize: "4em" }}>
						<CancelOutlinedIcon fontSize="4em" sx={{ filter: "drop-shadow(0 0 1px black)" }}></CancelOutlinedIcon>
					</IconButton>}
				<CardMedia
					component="img"
					height="300"
					image={recipe.imgUrl}
					alt={recipe.name}
				/>

				<CardContent>
					{isScreenSizeSmall
						? <Typography gutterBottom variant="h4" color="primary.dark" noWrap={false}>
							{recipe.name}
							<Divider />
						</Typography>
						: <Divider textAlign="left">
							<Typography gutterBottom variant="h4" color="primary.dark" noWrap={false}>
								{recipe.name}
							</Typography>
						</Divider>}
					<Box>

						<Grid container justifyContent={"flex-start"} sx={{ mb: "1rem" }}>
							<Grid item >{<span style={{ color: "#A6B727" }}><i className="fa-solid fa-seedling fa-xl"></i></span>} </Grid>
							{recipe.ingredients?.map((ing, index) =>
								<Grid item key={index}>
									<Chip sx={{ marginInline: "1px" }} label={ing.ingredient.name + " " + ing.amount + ing.unit} variant="outlined" />
								</Grid>
							)}
						</Grid>

					</Box>


					<Typography gutterBottom variant="body1">{recipe.description}</Typography>
					<Divider sx={{ marginBottom: "1rem" }} />
					<Typography fontWeight="600">
						{<span style={{ color: "#A6B727" }}><i className="fa-regular fa-clock fa-xl"></i></span>} {recipe.aproxTime}
						{<br />}{<br />}
					</Typography>
					<Typography variant="body3">
						{recipe.instructions?.map((inst, i) => <li style={{ listStyle: "ordered" }} key={i}>{inst} <br /><br /></li>)}
					</Typography>
					<Divider sx={{ marginBottom: "1rem" }} />

				</CardContent>
			</Card>
		</Dialog>
	);
}

export default RecipeModal