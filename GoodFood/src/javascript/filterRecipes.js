const filterRecipes = (recipes, setFilteredRecipes, selectedIngredients) => {
	if (selectedIngredients.length === 0) {
		setFilteredRecipes(recipes);
	}
	else {
		const output = recipes.map(recipe => {
			let currentWeight = 0;
			const recipeIngredients = recipe.ingredients.map(ingredient => ingredient.ingredient.name);
			for (let i = 0; i < recipeIngredients.length; i++) {
				if (recipeIngredients.includes(selectedIngredients[i])) {
					currentWeight++;
				}
			}
			return { recipe, currentWeight }
		}).sort(function (a, b) { return a.currentWeight - b.currentWeight; }).reverse().map(i => i.recipe);
		console.log(output)
		setFilteredRecipes(output);
	}
}


export default filterRecipes;