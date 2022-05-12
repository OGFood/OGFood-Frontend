import { useState,useEffect } from "react"
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
import { margin, padding, textAlign } from '@mui/system';
import FoodBg from "../assets/images/foodbg.png"
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import {useRecoilState} from "recoil"
import ingredientsState from "../atoms/ingredientsState";


// TODO: Make a proper "recipe-preview" card/paper.
// TODO: Text shadow

const tempDataRecipes = [{
	name: "Pasta Bolognese",
	id: 1,
	ingredients: ["pasta", "minced meat", "tomatoes", "oregano"],
	description: "Nothing beats a hearthy meal of Pasta Bolognese. This recipe is easy to make and makes the perfect lunch or dinner. It tastes just as good the day after, so cook some extra!",
	imgSrc: "https://cdn-rdb.arla.com/Files/arla-se/629559204/0a998d4e-d757-4ef1-9915-48189679c1eb.jpg?mode=crop&w=1269&h=715&ak=f525e733&hm=e78d4790",
},
{
	name: "Pizza",
	id: 2,
	ingredients: ["dough", "cheese", "salami", "smoked ham"],
	description: "Pizza, a modern classic! Make it as an everyday meal, or spice it up for your favourite weekend movie. A simple recipe made with home-made dough and tomatoes with shredded cheese. This pizza is topped with sliced ham, salami sausage, and mushrooms",
	imgSrc: "https://cdn-rdb.arla.com/Files/arla-se/66124392/d83377a8-d3ea-46bc-aee6-fca575172aef.jpg?crop=(0,0,0,-148)&w=1269&h=715&ak=f525e733&hm=5c342ed7",
},
{
	name: "Pad Thai",
	id: 3,
	ingredients: ["noodles", "chicken", "peanuts", "chili flakes", "sweet chili sauce", "lime"],
	description: "A wonderful recipe for Pad Thai. Release the fragrances of the Thai Kitchen at your dinner table. Pad Thai is a street-food classic that everybody loves. Adjust the hotness after taste and throw some peanuts and chili flakes on top for extra garnish.",
	imgSrc: "https://cdn-rdb.arla.com/Files/arla-se/2703932663/0856b724-f44d-4afd-aa12-acd925ed24fb.jpg?mode=crop&w=1269&h=715&ak=f525e733&hm=e78d4790",
},
{
	name: "Meatballs with mashed potatoes",
	id: 4,
	ingredients: ["ground beef", "potatoes", "sour cream"],
	description: "A swedish classic. Garnish with some diced apple and parsley for a slight twist.",
	imgSrc: "https://cdn-rdb.arla.com/Files/arla-se/2108144194/01ee9015-b7d0-405b-b322-2f5d4cedfecf.jpg?crop=(0,148,0,0)&w=1269&h=715&ak=f525e733&hm=531bb18d",
},
{
	name: "Salmon with pasta and lime",
	id: 5,
	ingredients: ["pasta", "salmon", "lime", "creme fraiche", "honey", "chicken broth"],
	description: "A quick and tasty everyday favourite. Served with a creamy sauce sweetened by honey, with some extra zing from lime.",
	imgSrc: "https://cdn-rdb.arla.com/Files/arla-se/3185386303/97993690-6b12-4db5-99e5-4a9c327dcf97.jpg?mode=crop&w=1269&h=715&ak=f525e733&hm=e78d4790",
},
{
	name: "Pancakes",
	id: 6,
	ingredients: ["milk", "eggs", "butter", "flour"],
	description: "Pancake - a clear favourite! Simple base recipe for thin pancakes. Throw them in the pan and serve with jam, cream, or why not some ice-cream!",
	imgSrc: "https://cdn-rdb.arla.com/Files/arla-se/3249856695/32b74f1c-1632-4aee-aa3b-8fd449494835.jpg?mode=crop&w=1269&h=715&ak=f525e733&hm=e78d4790",
},
];
const tempDataIngredients = ["chicken", "tomato", "pasta", "fish", "dough", "noodles", "cucumber", "creme fraiche", "salmon"]


const Main = () => {
	// TODO: States for ingredients/recipe, searchterm etc
	const [selectedIngredients, setSelectedIngredients] = useState([])
	const [ingredientsList,setIngredientsList] = useRecoilState(ingredientsState);

	const displayRecipes = tempDataRecipes.map((recipe, i) => (
		<Grid item xs={12} sm={6} lg={4} key={i}>
			<RecipePreviewCard recipe={recipe} />
		</Grid>
	));

	useEffect(() => {
		async function fetchIngredients() {
		let data = await fetch("https://localhost:7144/api/ingredients");
		let json = await data.json();
		setIngredientsList(json);
	}
	fetchIngredients();
	},[]);


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
					<Typography variant='h4' component="h2" color="white" gutterBottom fontWeight="700" sx={{ textShadow: "0px 1px 6px black" }}>
						No inspiration? No problem!
					</Typography>
					<Typography color="white" variant='body1' gutterBottom sx={{ textShadow: "0px 2px 8px black" }}>
						Enter what you have in your fridge or your pantry, and we'll come up with a fitting recipe
					</Typography>

					<Autocomplete
						onChange={(e, value) => setSelectedIngredients(value)}
						multiple
						id="ingredients"
						options={ingredientsList===null?tempDataIngredients:ingredientsList.map(x=>x.name)} // The autocomplete data
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
							<TextField {...params} variant="outlined" label="Ingredients" placeholder="Search & Select ingredients" color="primary"
								sx={{
									"& .MuiOutlinedInput-root": {
										bgcolor: "white",
									},
									"& .MuiOutlinedInput-root.Mui-focused": {
										"& > fieldset": {
											boxShadow: "0px 0px 5px 4px white",
										}
									},

								}}
							/>
						)} />

				</Toolbar>



			</Box>
			<Box marginTop={"4rem"}>
				<Grid container spacing={2} justifyContent={"center"}>
					{displayRecipes}
				</Grid>
			</Box>
		</Container >
	)
}

export default Main