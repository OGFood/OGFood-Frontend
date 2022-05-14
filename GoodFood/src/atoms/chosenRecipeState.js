import { atom } from 'recoil';

const chosenRecipeState = atom({
	key: 'chosenRecipe',
	default: ""
});

export default chosenRecipeState;