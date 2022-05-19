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

const SelectPortionSize = ({ recipeIngredients, setRecipeIngredients, recServings, ingredientsAmount }) => {

	const bowlIcon = <span style={{ color: "", verticalAlign: "center", display: "inline-block" }}><i className="fa-solid fa-bowl-rice fa-xl"></i></span>;

	/** 
	 * Set value to the recipe.serving as default => 
	 * Copy recipe.serving into a new changable serving for the recipe => 
	 * Modify the changeable serving size based on the value => 
	 * Modify the ingredients amount based on the new serving size value
	*/

	const [servings, setServings] = useState()
	const [value, setValue] = useState("")

	const changeIngredientsTest = () => {

		// let ingredientsArray = recipeIngredients.map(element => {
		// 	return element.amount;
		// });
		let items = [...recipeIngredients]

		// let item = { ...items[0] }
		for (let i = 0; i < items.length; i++) {
			let item = { ...items[i] };

			let standardAmount = recipeIngredients[i].amount

			item.amount = (standardAmount / 4) * value;

			items[i] = item;
		}
		console.log(items)

		// item.amount = 200

		// put edited item back into array
		// items[0] = item;

		// console.log(items)
	}

	const handleServingChange = (e) => {

		changeIngredientsTest();
		setValue(e.target.value)
	}

	useEffect(() => {
		setServings(recServings)
	})




	return (



		<Box sx={{ minWidth: 120, maxWidth: 120, paddingBottom: "10px" }}>
			{servings}
			{value}
			{/* {console.log(servingSize)} */}
			<FormControl fullWidth>

				<InputLabel id="select-serving-size">Servings</InputLabel>
				<Select
					id="serving-size"
					label="Serving Size"
					labelId="select-serving-size"
					size='small'
					variant="outlined"
					displayEmpty
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
