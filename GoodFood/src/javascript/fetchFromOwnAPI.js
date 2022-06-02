const fetchIngredients = async (updateIngredientsList) => {
	await fetch("https://godfoodapi.azurewebsites.net/api/ingredients")
		.then(response => {
			if (response.ok) {
				return response.json();
			} else {
				throw new Error("Something went wrong with fetching ingredients");
			}
		}).then(data => updateIngredientsList(data))
		.catch(error => console.log(error));
};

const fetchRecipes = async (updateRecipes, updateFilteredRecipes) => {

	await fetch("https://godfoodapi.azurewebsites.net/api/recipes")
		.then(response => {
			if (response.ok) {
				return response.json();
			} else {
				throw new Error("Something went wrong with fetching recipes");
			}
		}).then(data => {
			updateRecipes(data)
			updateFilteredRecipes(data)
		})
		.catch(error => console.log(error));
};

export { fetchIngredients, fetchRecipes };