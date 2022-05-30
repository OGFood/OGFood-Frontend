import { atom } from 'recoil';

const openContactFormState = atom({
	key: 'openContactForm',
	default: false
});

export default openContactFormState;