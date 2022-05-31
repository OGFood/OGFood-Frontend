import { atom } from 'recoil';

const currentUserState = atom({
	key: 'currentUser',
	default:
		{ name: "", email: "", password: "", cupboard: [] }

});

export default currentUserState;