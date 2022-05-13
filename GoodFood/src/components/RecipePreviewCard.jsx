import { useState } from "react";
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
import { IconButton } from '@mui/material';
import { Modal } from "@mui/material";
import { ExpandMoreOutlined, ExpandCircleDown, ExpandLessOutlined } from '@mui/icons-material';
import RecipeModal from "./RecipeModal";
import { minHeight } from "@mui/system";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useRecoilState } from "recoil";
import recipeModalState from "../atoms/recipeModalState";
import chosenRecipeState from "../atoms/chosenRecipeState"


// TODO: Remember proper id as key
// TODO: When using Collapse as part of conditional rendering, the animation goes away..? 
// TODO: Hide action-button for sprint-demo since it's not a functional element

const RecipePreviewCard = ({ recipe }) => {
	const [expandIngr, setExpandIngr] = useState(-1)
	const [expandDesc, setExpandDesc] = useState(-1)
	const [openRecipeModal, setOpenRecipeModal] = useRecoilState(recipeModalState)
	const [chosenRecipe, setChosenRecipe] = useRecoilState(chosenRecipeState)

	const handleExpandDesc = (i) => {
		setExpandDesc(expandDesc === i ? -1 : i)
	};
	const handleExpandIngredient = (i) => {
		setExpandIngr(expandIngr === i ? -1 : i)
	};

	const isScreenSizeMedium = useMediaQuery(useTheme().breakpoints.down('md'));

	const testr = () => {
		return (
			<RecipeModal></RecipeModal>
		)
	}

	const handleOpenModalClick = () => {
		setChosenRecipe(recipe)
		setOpenRecipeModal(true)
	}
	return (

		<Card sx={{ maxWidth: 500 }}>
			<CardMedia
				component="img"
				height="140"
				image={recipe.imgSrc}
				alt={recipe.name}
			/>
			<CardContent sx={{ paddingBottom: "0.2rem", minHeight: "200px" }}>

				{isScreenSizeMedium
					? <Typography gutterBottom variant="h5" noWrap={false}>
						{recipe.name}
						<Divider />
					</Typography>
					: <Divider textAlign="left">
						<Typography gutterBottom variant="h5" noWrap={false}>
							{recipe.name}
						</Typography>
					</Divider>}

				<Typography variant="body3" color="text.secondary" noWrap={false} >

					{recipe.description}
					<Divider sx={{ mt: "10px" }} />
				</Typography>

				{/* <Divider textAlign="left">
					<Typography variant="body3" color="text.secondary" >
						Ingredients
					</Typography>
					<IconButton onClick={() => handleExpandIngredient(recipe.id)}>
						{expandIngr === -1 ? <ExpandMoreOutlined color="primary" /> : <ExpandLessOutlined />}
					</IconButton>
				</Divider> */}

				{/* <Typography variant="body2" color="text.secondary" component="section">

					<Collapse in={expandIngr === recipe.id} unmountOnExit>
						{recipe.ingredients.map((ingredient, index) =>
							<li key={index}>{ingredient}</li>)}
					</Collapse>

				</Typography> */}

			</CardContent>
			<CardActions>
				<Grid container justifyContent="right">
					{/* <RecipeModal recipe={recipe} /> */}
					<Button onClick={() => handleOpenModalClick()}> Test</Button>
				</Grid>
			</CardActions>
			{openRecipeModal ? <RecipeModal recipe={chosenRecipe} /> : null}
		</Card >

	);
}

export default RecipePreviewCard