import { atom } from 'recoil';

const currentUserState = atom({
	key: 'currentUser',
	default:
		{ username: "", email: "", password: "", cupboard: "" }

});

export default currentUserState;