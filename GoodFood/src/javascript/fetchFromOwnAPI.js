const fetchIngredients = async (updateIngredientsList) => {
		await fetch("https://localhost:7144/api/ingredients")
				.then(response => {
					if (response.ok) {
						return response.json();
					} else {
						throw new Error("Something went wrong with fetching ingredients");
					}
				}).then(data =>updateIngredientsList(data))
				.catch(error => console.log(error));
};

const fetchRecipes = async (updateRecipes,updateFilteredRecipes) => {
		
	await fetch("https://localhost:7144/api/recipes")
				.then(response => {
					if (response.ok) {
						return response.json();
					} else {
						throw new Error("Something went wrong with fetching recipes");
					}
				}).then(data =>{
					updateRecipes(data)
					updateFilteredRecipes(data)
				})
				.catch(error => console.log(error));
};

export { fetchIngredients, fetchRecipes };