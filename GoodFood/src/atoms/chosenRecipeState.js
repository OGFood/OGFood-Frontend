import { atom } from 'recoil';

const chosenRecipeState = atom({
	key: 'chosenRecipe',
	default: null
});

export default chosenRecipeState;