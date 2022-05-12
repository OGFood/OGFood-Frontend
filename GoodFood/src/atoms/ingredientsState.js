import {atom} from 'recoil';

const ingredientsState = atom({
	  key: 'ingredients',
	  default: null
});

export default ingredientsState;