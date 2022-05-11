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


// TODO: Remember proper id as key
// TODO: When using Collapse as part of conditional rendering, the animation goes away..? 
// TODO: Hide action-button for sprint-demo since it's not a functional element

const RecipePreviewCard = ({ recipe }) => {
	const [expandIngr, setExpandIngr] = useState(-1)
	const [expandDesc, setExpandDesc] = useState(-1)

	const recipeModal = () => {

		return (
			<Modal>
				<Card>

					<Typography> Hii</Typography>
				</Card>
			</Modal>
		)
	}

	const firstThreeIngredients = recipe.ingredients.slice(0, 3)

	const handleExpandDesc = (i) => {
		setExpandDesc(expandDesc === i ? -1 : i)
	};
	const handleExpandIngredient = (i) => {
		setExpandIngr(expandIngr === i ? -1 : i)
	};

	return (
		<Card sx={{ maxWidth: 500 }}>
			<CardMedia
				component="img"
				height="140"
				image={recipe.imgSrc}
				alt={recipe.name}
			/>
			<CardContent sx={{ paddingBottom: "0.2rem" }}>
				<Divider textAlign="left">

					<Typography gutterBottom variant="h5" >
						{recipe.name}

					</Typography>

				</Divider>



				<Typography variant="body3" color="text.secondary" noWrap={false} >
					{expandDesc !== recipe.id ? recipe.description.slice(0, 100) + "..." :
						<Collapse in={expandDesc == recipe.id} >
							{recipe.description}
						</Collapse>}
					<IconButton onClick={() => handleExpandDesc(recipe.id)} size="large" >
						{expandDesc === -1 ? <ExpandCircleDown color="primary" /> : <ExpandLessOutlined />}
					</IconButton>
				</Typography>

				<Divider textAlign="left">
					<Typography variant="body3" color="text.secondary" >
						Ingredients
					</Typography>
					<IconButton onClick={() => handleExpandIngredient(recipe.id)}>
						{expandIngr === -1 ? <ExpandMoreOutlined color="primary" /> : <ExpandLessOutlined />}
					</IconButton>
				</Divider>

				<Typography variant="body2" color="text.secondary" component="section">

					<Collapse in={expandIngr === recipe.id} unmountOnExit>
						{recipe.ingredients.map((ingredient, index) =>
							<li key={index}>{ingredient}</li>)}
					</Collapse>

				</Typography>

			</CardContent>
			<CardActions>
				<Grid container justifyContent="right">
					<Button onClick={() => recipeModal()} size="medium">View Recipe</Button>
				</Grid>
			</CardActions>
		</Card >
	);
}

export default RecipePreviewCard