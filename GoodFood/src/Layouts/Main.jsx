import { useState } from "react"
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
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';


// TODO: Make a proper "recipe-preview" card/paper.
// TODO: Text shadow


const tempDataRecipes = [{
	name: "Pasta Bolognese",
	id: 1,
	ingredients: ["pasta", "minced meat", "tomatoes"],
	description: "A short description of the recipe to be displayed here. This is how you cook Pasta Bolognese.",
	imgSrc: "https://cdn-rdb.arla.com/Files/arla-se/629559204/0a998d4e-d757-4ef1-9915-48189679c1eb.jpg?mode=crop&w=1269&h=715&ak=f525e733&hm=e78d4790",
},
{
	name: "Pizza",
	id: 2,
	ingredients: ["dough", "cheese", "whatever"],
	description: "A short description of the recipe to be displayed here. This is how you cook Pizza",
	imgSrc: "https://cdn-rdb.arla.com/Files/arla-se/66124392/d83377a8-d3ea-46bc-aee6-fca575172aef.jpg?crop=(0,0,0,-148)&w=1269&h=715&ak=f525e733&hm=5c342ed7",
},
{
	name: "Pasta Bolognese",
	id: 3,
	ingredients: ["pasta", "minced meat", "tomatoes"],
	description: "A short description of the recipe to be displayed here. This is how you cook Pasta Bolognese.",
	imgSrc: "https://cdn-rdb.arla.com/Files/arla-se/629559204/0a998d4e-d757-4ef1-9915-48189679c1eb.jpg?mode=crop&w=1269&h=715&ak=f525e733&hm=e78d4790",
},
{
	name: "Pizza",
	id: 4,
	ingredients: ["dough", "cheese", "whatever"],
	description: "A short description of the recipe to be displayed here. This is how you cook Pizza",
	imgSrc: "https://cdn-rdb.arla.com/Files/arla-se/66124392/d83377a8-d3ea-46bc-aee6-fca575172aef.jpg?crop=(0,0,0,-148)&w=1269&h=715&ak=f525e733&hm=5c342ed7",
},
{
	name: "Pasta Bolognese",
	id: 5,
	ingredients: ["pasta", "minced meat", "tomatoes"],
	description: "A short description of the recipe to be displayed here. This is how you cook Pasta Bolognese.",
	imgSrc: "https://cdn-rdb.arla.com/Files/arla-se/629559204/0a998d4e-d757-4ef1-9915-48189679c1eb.jpg?mode=crop&w=1269&h=715&ak=f525e733&hm=e78d4790",
},
{
	name: "Pizza",
	id: 6,
	ingredients: ["dough", "cheese", "whatever"],
	description: "A short description of the recipe to be displayed here. This is how you cook Pizza",
	imgSrc: "https://cdn-rdb.arla.com/Files/arla-se/66124392/d83377a8-d3ea-46bc-aee6-fca575172aef.jpg?crop=(0,0,0,-148)&w=1269&h=715&ak=f525e733&hm=5c342ed7",
},
];
const tempDataIngredients = ["chicken", "tomatoe", "pasta", "fish", "dough", "cucumber"]


const Main = () => {
	// TODO: States for ingredients/recipe, searchterm etc
	const [selectedIngredients, setSelectedIngredients] = useState([])

	const displayRecipes = tempDataRecipes.map((recipe, i) => (
		<Grid item xs={12} sm={6} lg={4} key={i}>
			<RecipePreviewCard recipe={recipe} />
		</Grid >
	));


	return (
		<Container sx={{ bgcolor: "mainbg.main", paddingBottom: "5rem" }} maxWidth="xl" >
			{console.log(selectedIngredients)}
			<Box sx={{
				backgroundImage: `url(${FoodBg})`,
				bgcolor: "primary.light",
				padding: "2rem",
				borderRadius: "1rem",
				maxWidth: "85vmax",
				marginInline: "auto",
				marginTop: "2rem"
			}}>
				<Toolbar sx={{ bgcolor: "", justifyContent: "center", flexDirection: "column" }} >
					<Typography variant='h4' component="h2" color="white" gutterBottom fontWeight="700" sx={{ textShadow: "0px 2px 10px black" }}>
						No inspiration? No problem!
					</Typography>
					<Typography color="white" variant='body1' gutterBottom sx={{ textShadow: "0px 2px 8px black" }}>
						Enter what you have in your fridge or your pantry, and we'll come up with a fitting recipe
					</Typography>

					<Autocomplete
						onChange={(e, value) => setSelectedIngredients(value)}
						multiple
						id="ingredients"
						options={tempDataIngredients} // The autocomplete data
						disableCloseOnSelect
						renderOption={(props, option, { selected }) => (
							<li {...props}>
								<Checkbox
									icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
									checkedIcon={<CheckBoxIcon fontSize="small" />}
									style={{ marginRight: 8 }}
									checked={selected}
								/>
								{option}
							</li>
						)}
						style={{ minWidth: "79vmin" }}
						renderInput={(params) => (
							<TextField {...params} variant="outlined" label="Ingredients" placeholder="Select ingredients" color="primary" sx={{ bgcolor: "white", boxShadow: "0px 0px 4px black", borderRadius: "5px" }} />
						)} />

				</Toolbar>



			</Box>
			<Box marginTop={"4rem"}>
				<Grid container spacing={2} justifyContent={"center"}>
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