import { atom } from 'recoil';

const userLoggedInState = atom({
	key: 'userLoggedin',
	default: false
});

export default userLoggedInState;