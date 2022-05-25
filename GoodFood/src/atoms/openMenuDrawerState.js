import { atom } from 'recoil';

const openMenuDrawerState = atom({
	key: 'openMenuDrawer',
	default: false
});

export default openMenuDrawerState;