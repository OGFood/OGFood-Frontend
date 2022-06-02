import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Slider from "@mui/material/Slider"
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import chosenRecipeState from '../atoms/chosenRecipeState';
import recipesState from '../atoms/recipesState';
import { useEffect, useState } from "react"
import { display } from '@mui/system';

const SelectPortionSize = ({ recipeIngredients, setRecipeIngredients, recServings, originalIngredients }) => {

	const bowlIcon = <span style={{ color: "", verticalAlign: "center", display: "inline-block" }}><i className="fa-solid fa-bowl-rice fa-xl"></i></span>;

	const [selectedServings, setSelectedServings] = useState("");

	// TODO: Reset value shown in MUI-SelectBox to the correct value for each recipe

	const changeIngredientsTest = (desiredServings) => {
		// console.log(originalIngredients)
		let adjustedIngredients = [...recipeIngredients]

		const defaultServingSize = recServings;

		// Sets the conversion factor.
		// Eg 4 servings = 1, 6 servings = conversion factor of 1.5. 8serv = conversion factor of 2 (since it's double).
		const conversionFactor = desiredServings / defaultServingSize;

		for (let i = 0; i < adjustedIngredients.length; i++) {
			let ingredient = { ...adjustedIngredients[i] };
			// Need to set ingredient amount to base value before changing it again
			ingredient.amount = originalIngredients[i].amount
			ingredient.amount *= conversionFactor;

			adjustedIngredients[i] = ingredient;
		}
		setRecipeIngredients(adjustedIngredients)
	}

	const handleServingChange = (e) => {
		setSelectedServings(e.target.value)
		changeIngredientsTest(e.target.value);
	}

	useEffect(() => {
		setSelectedServings("")
	}, [originalIngredients])


	const displayIcons =
		[...Array(selectedServings ? selectedServings : recServings)].map((elem, index) =>
			<span key={index} style={{ paddingRight: "3px", color: "primary.dark", verticalAlign: "center", display: "inline-block" }}><i className="fa-solid fa-bowl-rice fa-xl"></i></span>
		)


	return (


		<Toolbar variant="dense" disableGutters={true} sx={{ marginBottom: 1, gap: "1rem", }}>
			<Typography>Servings</Typography>
			<Box sx={{ minWidth: 50, paddingBottom: "10px" }}>

				<FormControl fullWidth>
					<Select
						sx={{ color: "primary.dark", textAlign: "center" }}
						id="serving-size"
						size='small'
						variant="standard"
						// value={selectedServings}
						defaultValue="" //<-- This is the magic
						renderValue={() => selectedServings ? selectedServings : recServings}
						displayEmpty={true}
						onChange={handleServingChange}
					>
						<MenuItem value={1}>1</MenuItem>
						<MenuItem value={2}>2</MenuItem>
						<MenuItem value={4}>4</MenuItem>
						<MenuItem value={6}>6</MenuItem>
						<MenuItem value={8}>8</MenuItem>

					</Select>

				</FormControl>

			</Box>
			<Typography color="primary.dark">{displayIcons}</Typography>

		</Toolbar>

	)
}

export default SelectPortionSize
