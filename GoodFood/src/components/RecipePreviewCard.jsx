import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';


// TODO: Remember proper id as key
const RecipePreviewCard = ({ recipe }) => {
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
				<Divider textAlign="left">Ingredients</Divider>
				<Typography variant="body2" color="text.secondary" gutterBottom>
					{recipe.ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)}
				</Typography>
				<Divider />
				<Typography variant="body3" color="text.secondary">

					Lalala short description from the recipe
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small">View</Button>
			</CardActions>
		</Card >
	);
}

export default RecipePreviewCard