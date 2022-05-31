import { atom } from 'recoil';

const offlineUsersState = atom({
	key: 'offlineUsers',
	default: [
		{ id: "", name: "John Doe", mail: "123@321.com", password: "123456", cupboard: [] },
		{ id: "", name: "Jane Doe", mail: "321@123.com", password: "654321", cupboard: [] },
	]
});

export default offlineUsersState;