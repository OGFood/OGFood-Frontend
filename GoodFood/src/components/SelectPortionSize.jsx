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

	const [value, setValue] = useState("")

	// TODO: Reset value shown in MUI-SelectBox to the correct value for each recipe

	const changeIngredientsTest = (desiredServings) => {
		console.log(originalIngredients)
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
		setValue(e.target.value)
		changeIngredientsTest(e.target.value);
	}

	const displayIcons =
		[...Array(value)].map((elem, index) =>

			<span key={index} style={{ color: "primary.dark", verticalAlign: "center", display: "inline-block" }}><i className="fa-solid fa-bowl-rice fa-xl"></i></span>

		)


	return (


		<Toolbar variant="dense" disableGutters={true} sx={{ marginBottom: 1, gap: "1rem", }}>
			<Typography>Servings</Typography>
			<Box sx={{ minWidth: 50, paddingBottom: "10px" }}>

				{/* {console.log(servingSize)} */}

				<FormControl fullWidth>
					{/* <InputLabel id="select-serving-size" sx={{ borderRadius: "1rem" }}> Servings </InputLabel> */}
					<Select
						sx={{ color: "primary.dark", textAlign: "center" }}
						id="serving-size"
						size='small'
						variant="standard"
						value={value}
						onChange={handleServingChange}
					>
						<MenuItem value={1}>1</MenuItem>
						<MenuItem value={2}>2</MenuItem>
						<MenuItem value={4}>4</MenuItem>
						<MenuItem value={6}>6</MenuItem>
						<MenuItem value={8}>8</MenuItem>
					</Select>

				</FormControl>

			</Box >
			<Typography color="primary.dark">{displayIcons}</Typography>

		</Toolbar>



		// Slider?
		// const servings = [
		// 	{ value: 1, label: "1" },
		// 	{ value: 2, label: "2" },
		// 	{ value: 4, label: "4" },
		// 	{ value: 6, label: "6" },
		// 	{ value: 8, label: "8" }
		// ]
		// <Box sx={{ width: "20vmax", justifyContent: "center", alignContent: "center", marginInline: "auto", textAlign: "center" }}>

		// 	<Typography > Serving Size </Typography>
		// 	<Slider
		// 		max={8}
		// 		min={1}
		// 		defaultValue={4}
		// 		step={null}
		// 		valueLabelDisplay="auto"
		// 		marks={servings}
		// 	/>
		// </Box>
	)
}

export default SelectPortionSize
