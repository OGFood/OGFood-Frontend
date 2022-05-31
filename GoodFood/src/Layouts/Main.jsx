import { useState, useEffect } from "react"
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
import { useRecoilState } from "recoil"
import ingredientsState from "../atoms/ingredientsState";
import recipesState from "../atoms/recipesState";
import { fetchIngredients, fetchRecipes } from "../javascript/fetchFromOwnAPI";
import filterRecipes from "../javascript/filterRecipes";
import LoginSignUpContainer from "../components/LoginSignUpContainer";
import ContactForm from "../components/ContactForm";
import currentUserState from "../atoms/currentUserState";

// TODO: When searching in autocomplete box => when enter is pressed, select first autocomplete suggestion
// TODO: Autocompletebox => onchange, sync with logged in user ingredients db?

const Main = () => {
	const [autocompleteValue, setAutocompleteValue] = useState([]) // Autocomplete lådan får sitt eget state för sitt värde så att den kontrollerar sig själv

	const [selectedIngredients, setSelectedIngredients] = useState([]) // SelectedIngredients sätts till autocompletes värde när autocomplete ändras, istället för direkt från värdet
	const [ingredientsList, setIngredientsList] = useRecoilState(ingredientsState);
	const [user, setUser] = useRecoilState(currentUserState);
	const [recipes, setRecipes] = useRecoilState(recipesState);
	const [filteredRecipes, setFilteredRecipes] = useState(recipes);



	const displayRecipes = filteredRecipes.map((recipe, i) => (
		<Grid item xs={12} sm={6} lg={4} key={i}>
			<RecipePreviewCard recipe={recipe} />
		</Grid>
	));


	useEffect(() => {
		fetchIngredients(setIngredientsList);
		fetchRecipes(setRecipes, setFilteredRecipes);
	}, []);

	useEffect(() => {
		setSelectedIngredients(autocompleteValue)
	}, [autocompleteValue])

	useEffect(() => {
		filterRecipes(recipes, setFilteredRecipes, selectedIngredients);
	}, [selectedIngredients])

	useEffect(() => {
		console.log("Currentuser Changed");

		if (user.cupboard !== undefined) {
			setAutocompleteValue(user.cupboard.map((x) => x.name.toLocaleLowerCase()))
		}
	}, [user])

	return (

		<Container sx={{ bgcolor: "mainbg.main", paddingBottom: "5rem" }} maxWidth="xl" >
			{console.log("User Cupboard: ", user.cupboard)}
			<Box sx={{
				backgroundImage: `url(${FoodBg})`,
				bgcolor: "primary.light",
				padding: "2rem",
				borderRadius: "1rem",
				maxWidth: "85vmax",
				marginInline: "auto",
				marginTop: "2rem"
			}}>
				<LoginSignUpContainer />
				<ContactForm />
				<Toolbar sx={{ bgcolor: "", justifyContent: "center", flexDirection: "column" }} >
					<Typography variant='h4' component="h2" color="white" gutterBottom fontWeight="700" sx={{ textShadow: "0px 1px 6px black" }}>
						No inspiration? No problem!
					</Typography>
					<Typography color="white" variant='body1' fontWeight="600" gutterBottom sx={{ textShadow: "0px 2px 8px black" }}>
						Enter what you have in your fridge or your pantry, and we'll come up with a fitting recipe
					</Typography>

					<Autocomplete
						ListboxProps={{ style: { maxHeight: "15rem" } }}
						// onChange={(e, value) => setSelectedIngredients(value)}
						onChange={(e, value) => setAutocompleteValue(value)}
						value={autocompleteValue}
						multiple
						id="ingredients"
						options={ingredientsList.map(x => x.name.toLocaleLowerCase())} // The autocomplete data
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
		</Container>
	)
}

export default Main