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

// TODO: Make a proper "recipe-preview" card/paper.
// TODO: Text shadow

const Main = () => {
	const [selectedIngredients, setSelectedIngredients] = useState([])
	const [ingredientsList, setIngredientsList] = useRecoilState(ingredientsState);
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
		filterRecipes(recipes, setFilteredRecipes, selectedIngredients);
	}, [selectedIngredients])

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
					<Typography color="white" variant='body1' fontWeight="600" gutterBottom sx={{ textShadow: "0px 2px 8px black" }}>
						Enter what you have in your fridge or your pantry, and we'll come up with a fitting recipe
					</Typography>

					<Autocomplete
						ListboxProps={{ style: { maxHeight: "15rem" } }}
						onChange={(e, value) => setSelectedIngredients(value)}
						multiple
						id="ingredients"
						options={ingredientsList.map(x => x.name)} // The autocomplete data
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