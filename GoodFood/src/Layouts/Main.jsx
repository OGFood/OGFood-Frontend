import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from "@mui/material/Container"
import Paper from '@mui/material/Paper';
import Card from "@mui/material/Card"
import Grid from '@mui/material/Grid';
import RecipePreviewCard from '../components/RecipePreviewCard';
import { styled } from '@mui/material/styles';
import Logo from "../assets/images/logo-notext-white-small.png"
import MenuIcon from '@mui/icons-material/Menu';
import { margin, textAlign } from '@mui/system';
import FoodBg from "../assets/images/foodbg.png"


// TODO: Make a proper "recipe-preview" card/paper.


const tempData = [{
	name: "Pasta Bolognese",
	ingredients: ["pasta", "minced meat", "tomatoes"],
	imgSrc: "https://cdn-rdb.arla.com/Files/arla-se/629559204/0a998d4e-d757-4ef1-9915-48189679c1eb.jpg?mode=crop&w=1269&h=715&ak=f525e733&hm=e78d4790",
},
{
	name: "Pizza",
	ingredients: ["dough", "cheese", "whatever"],
	imgSrc: "https://cdn-rdb.arla.com/Files/arla-se/66124392/d83377a8-d3ea-46bc-aee6-fca575172aef.jpg?crop=(0,0,0,-148)&w=1269&h=715&ak=f525e733&hm=5c342ed7",
}
];

const displayRecipes = tempData.map((recipe) => (
	<Grid item xs={12} md={6} lg={4}>
		<RecipePreviewCard recipe={recipe} />
	</Grid >
));

const Main = () => {

	return (
		<Container sx={{ bgcolor: "white", border: "1px solid black", minHeight: "100vh" }} maxWidth="xl" >

			{/* <Box sx={{
				backgroundImage: `url(${FoodBg})`,
				bgcolor: "primary.light",
				padding: "100px",
				borderRadius: "2rem",
			}}> */}
			<Box sx={{ bgcolor: "white" }}>
				<Typography>

				</Typography>
			</Box>



			{/* </Box> */}
			<Box marginTop={"4rem"}>
				<Grid container spacing={2}>
					{/* <Grid item xs={12} md={6} lg={4}>
					<Item>xs=8</Item>
				</Grid> */}
					{displayRecipes}
				</Grid>
			</Box>
		</Container >
	)
}

export default Main