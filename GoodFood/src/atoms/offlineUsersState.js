import { atom } from 'recoil';

const offlineUsersState = atom({
	key: 'offlineUsers',
	default: [
		{ username: "John Doe", email: "123@321.com", password: "123456", cupboard: "" },
		{ username: "Jane Doe", email: "321@123.com", password: "654321", cupboard: "" },
	]
});

export default offlineUsersState;