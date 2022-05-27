import { atom } from 'recoil';

const openLoginSignUpState = atom({
	key: 'openLoginSignUp',
	default: false
});

export default openLoginSignUpState;