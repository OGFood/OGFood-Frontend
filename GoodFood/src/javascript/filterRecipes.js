const filterRecipes = (recipes, setFilteredRecipes, selectedIngredients) => {
	if (selectedIngredients.length === 0) {
		setFilteredRecipes(recipes);
	} else {
		const output = recipes.filter(recipe => {
			const recipeIngredients = recipe.ingredients.map(ingredient => ingredient.ingredient.name);
			return selectedIngredients.every(ingredient => recipeIngredients.includes(ingredient));
		})
		setFilteredRecipes(output);
	}
}

export default filterRecipes;