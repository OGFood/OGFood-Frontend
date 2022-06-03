import { useState, forwardRef, useEffect } from "react";
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
import SelectPortionSize from "./SelectPortionSize";
import AmountHelperModal from "./AmountHelperModal";


/**
 * Icons as <i> since I can't be bothered installing another package:
 * 			
		{<span style={{ color: "" }}><i className="fa-solid fa-bowl-rice fa-xl"></i></span>}
		{<span style={{ color: "" }}><i className="fa-solid fa-cubes-stacked fa-xl"></i></span>}
		{<span style={{ color: "" }}><i className="fa-solid fa-seedling fa-xl"></i></span>}
		{<span style={{ color: "" }}><i className="fa-solid fa-utensils fa-xl"></i></span>}
		{<span style={{ color: "" }}><i className="fa-regular fa-clock fa-xl"></i></span>}
		{<span style={{ color: "" }}><i className="fa-solid fa-clock fa-xl"></i></span>}
		{<span style={{ color: "" }}><i className="fa-solid fa-question"></i></span>}
		{<span style={{ color: "" }}><i class="fa-solid fa-circle-question"></i></span>}
		
 */

// TODO: Style scrollbar 
// TODO: Cover more of the screen on smaller sizes

const Transition = forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const RecipeModal = ({ recipe }) => {

	const [open, setOpen] = useRecoilState(recipeModalState)
	const [openIngHelper, setOpenIngHelper] = useState(false)
	const [recipeIngredients, setRecipeIngredients] = useState([])



	const handleClose = () => {
		setOpen(false);
	};



	useEffect(() => {
		setRecipeIngredients(recipe.ingredients)
	}, [recipe])


	const isScreenSizeSmall = useMediaQuery(useTheme().breakpoints.down('sm'));
	const isScreenSizeMedium = useMediaQuery(useTheme().breakpoints.down('md'));

	return (
		<Dialog

			scroll="paper"

			fullWidth={true}
			maxWidth={"md"}
			open={open}
			TransitionComponent={Transition}
			sx={{ minWidth: "100%" }}
			keepMounted
			onClose={handleClose}
			PaperProps={{ style: { minHeight: "950px", overflowY: "auto" } }}
			BackdropProps={{ style: { backgroundColor: "rgba(0,0,0,0.1)" }, }}
		>

			<Box >
				{!isScreenSizeSmall &&
					<IconButton onClick={() => handleClose()} sx={{ color: "mainbg.main", position: "absolute", right: "0", fontSize: "4em" }}>
						<CancelOutlinedIcon fontSize="4em" sx={{ filter: "drop-shadow(0 0 4px black)" }}></CancelOutlinedIcon>
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

						<SelectPortionSize
							recipeIngredients={recipeIngredients}
							setRecipeIngredients={setRecipeIngredients}
							recServings={recipe.servings}
							originalIngredients={recipe.ingredients}
						/>

						<Grid container justifyContent={"flex-start"} sx={{ mb: "1rem" }}>
							<Grid item >
								{<span style={{ color: "#A6B727" }}><i className="fa-solid fa-seedling fa-xl"></i></span>}
							</Grid>

							{recipeIngredients?.map((ing, index) =>
								<Grid item key={index}>
									<Chip sx={{ marginInline: "1px", marginBottom: "1px", fontWeight: "600" }} label={ing.ingredient.name + " " + ing.amount + ing.unit} variant="outlined" />
								</Grid>
							)}
							<Grid item>


								<IconButton onClick={() => setOpenIngHelper(true)} sx={{ padding: "3px" }}>
									{<span style={{ color: "#A6B727" }}><i className="fa-solid fa-circle-question fa-lg"></i></span>}
								</IconButton>


							</Grid>


							{openIngHelper && <AmountHelperModal open={openIngHelper} setOpen={setOpenIngHelper} />}

						</Grid>

					</Box>


					<Typography gutterBottom variant="body1">{recipe.description}</Typography>
					<Divider sx={{ marginBottom: "1rem" }} />
					<Typography fontWeight="600">
						{<span style={{ color: "#A6B727" }}><i className="fa-regular fa-clock fa-xl"></i></span>} {recipe.aproxTime}min
						{<br />}{<br />}
					</Typography>
					<Typography variant="body3">
						{recipe.instructions?.map((inst, i) => <li style={{ listStyle: "ordered" }} key={i}>{inst} <br /><br /></li>)}
					</Typography>
					<Divider sx={{ marginBottom: "1rem" }} />

				</CardContent>
				{isScreenSizeSmall && <IconButton onClick={() => handleClose()} sx={{ color: "primary.light", position: "fixed", right: "1px", bottom: "0px", fontSize: "3em" }}>
					<CancelOutlinedIcon fontSize="4em" sx={{ filter: "drop-shadow(0 0 1px black)" }}></CancelOutlinedIcon>
				</IconButton>}
			</Box>
		</Dialog>
	);
}

export default RecipeModal