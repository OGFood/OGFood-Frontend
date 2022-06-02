import { useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Box from "@mui/material/Box";
import CardContent from '@mui/material/CardContent';
import CardActionArea from "@mui/material/CardActionArea";
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
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useRecoilState } from "recoil";
import recipeModalState from "../atoms/recipeModalState";
import chosenRecipeState from "../atoms/chosenRecipeState"
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';


// TODO: Favicon / fav stuff, maybe share icon?


const RecipePreviewCard = ({ recipe }) => {
	const [expandIngr, setExpandIngr] = useState(-1)
	const [expandDesc, setExpandDesc] = useState(-1)
	const [favIcon, setFavIcon] = useState(-1)
	const [openRecipeModal, setOpenRecipeModal] = useRecoilState(recipeModalState)
	const [chosenRecipe, setChosenRecipe] = useRecoilState(chosenRecipeState)

	const handleExpandDesc = (i) => {
		setExpandDesc(expandDesc === i ? -1 : i)
	};

	const handleExpandIngredient = (i) => {
		setExpandIngr(expandIngr === i ? -1 : i)

	};

	const handleFavIcon = (i) => {
		setFavIcon(favIcon === i ? -1 : i)

	};

	const handleOpenModalClick = () => {
		setChosenRecipe(recipe)
		setOpenRecipeModal(true)
	};

	const isScreenSizeMedium = useMediaQuery(useTheme().breakpoints.down('md'));
	const recipeNameLengthTooLong = recipe.name.length >= 39
	return (

		<Card sx={{ maxWidth: 500 }}>

			<RecipeModal recipe={chosenRecipe} />
			<CardActionArea onClick={() => handleOpenModalClick()}>
				<CardMedia
					component="img"
					height="140"
					image={recipe.imgUrl}
					alt={recipe.name}
				/>

				<CardContent sx={{ paddingBottom: "0.2rem", minHeight: "200px" }}>
					{isScreenSizeMedium
						? <Typography gutterBottom variant="h5" color="primary.dark" noWrap={false}>
							{recipe.name}
							<Divider />
						</Typography>
						: recipeNameLengthTooLong
							?
							<Divider textAlign="left">
								<Typography gutterBottom variant="h5" color="primary.dark" sx={{ whiteSpace: "normal" }}>
									{recipe.name}
								</Typography>
							</Divider>
							:
							<Divider textAlign="left">
								<Typography gutterBottom variant="h5" color="primary.dark">
									{recipe.name}
								</Typography>
							</Divider>}

					<Typography variant="body3" fontSize="1.1rem" color="text.secondary" noWrap={false} >

						{recipe.description}
						<Divider sx={{ mt: "10px" }} />
					</Typography>
				</CardContent>

			</CardActionArea>
			<CardActions>
				<Typography textAlign="center" fontWeight="600" color="primary.dark">{<span style={{ color: "#A6B727" }}><i className="fa-regular fa-clock fa-xl"></i></span>} {recipe.aproxTime}min</Typography>
				<Grid container justifyContent="right">
					{/* <IconButton onClick={() => handleExpandIngredient(recipe.id)}>
						{expandDesc === -1 ? <ExpandMoreOutlined color="primary" /> : <ExpandLessOutlined />}
					</IconButton> */}
					<IconButton onClick={() => handleFavIcon(recipe.id)} size="large" aria-label="add to favorites">
						{favIcon === -1 ? <FavoriteIcon /> : <FavoriteIcon sx={{ color: "red" }} />}
					</IconButton>
				</Grid>
			</CardActions>
		</Card>
	);
}

export default RecipePreviewCard