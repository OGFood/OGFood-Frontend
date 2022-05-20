import { atom } from 'recoil';

const recipeModalState = atom({
	key: 'recipeModal',
	default: false
});

export default recipeModalState;