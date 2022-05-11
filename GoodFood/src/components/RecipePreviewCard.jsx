import { useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Collapse from '@mui/material/Collapse';
import { IconButton } from '@mui/material';
import { ExpandMoreOutlined, ExpandCircleDown, ExpandLessOutlined } from '@mui/icons-material';


// TODO: Remember proper id as key
const RecipePreviewCard = ({ recipe }) => {
	const [expandIngr, setExpandIngr] = useState(-1)



	const handleExpandIngredient = (i) => {
		setExpandIngr(expandIngr === i ? -1 : i)
	}

	return (
		<Card sx={{ maxWidth: 500 }}>
			<CardMedia
				component="img"
				height="140"
				image={recipe.imgSrc}
				alt={recipe.name}
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" >
					{recipe.name}
				</Typography>
				<Divider textAlign="left">Ingredients
					<IconButton onClick={() => handleExpandIngredient(recipe.id)}>
						{expandIngr === -1 ? <ExpandMoreOutlined color="primary" /> : <ExpandLessOutlined />}
					</IconButton>
				</Divider>

				<Typography variant="body2" color="text.secondary" gutterBottom>

					<Collapse in={expandIngr === recipe.id} unmountOnExit>
						{recipe.ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)}
					</Collapse>

				</Typography>
				<Divider />
				<Typography variant="body3" color="text.secondary" noWrap={true} >

					{recipe.description.slice(0, 50) + "..."}
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small">View</Button>
			</CardActions>
		</Card >
	);
}

export default RecipePreviewCard