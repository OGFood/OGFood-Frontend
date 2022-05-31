import { atom } from 'recoil';

const currentUserState = atom({
	key: 'currentUser',
	default:
		{ name: "", mail: "", password: "", cupboard: [] }

});

export default currentUserState;