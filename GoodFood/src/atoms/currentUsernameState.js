import { atom } from 'recoil';

const currentUsernameState = atom({
	key: 'currentUsername',
	default: "John Doe"
});

export default currentUsernameState;