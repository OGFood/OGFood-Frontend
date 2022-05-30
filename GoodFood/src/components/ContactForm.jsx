import { useRecoilState } from "recoil"
import { useState, forwardRef, useEffect } from "react";
import openLoginSignUpState from "../atoms/openLoginSignUpState"
import Slide from '@mui/material/Slide';
import LoginForm from "./LoginForm"
import SignUpForm from "./SignUpForm"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Box from "@mui/material/Box";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Collapse from '@mui/material/Collapse';
import Dialog from "@mui/material/Dialog";
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from "@mui/material/Paper"
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import userLoggedInState from '../atoms/userLoggedInState';
import currentUserState from '../atoms/currentUserState';
import openContactFormState from "../atoms/openContactFormState";
import { validatePassword, validateEmail, passwordErrorMessage, emailErrorMessage, userNotFoundMessage } from '../Auth/UserValidation';
import axios from "axios";



const Transition = forwardRef(function Transition(props, ref) {
	return <Slide direction="down" ref={ref} {...props} />;
});



const ContactForm = () => {

	const [userLoggedIn, setUserLoggedIn] = useRecoilState(userLoggedInState)
	const [currentUser, setCurrentUser] = useRecoilState(currentUserState)

	const [openContactForm, setOpenContactForm] = useRecoilState(openContactFormState)
	const [emailField, setEmailField] = useState(currentUser.email || "")
	const [messageTitleField, setMessageTitleField] = useState("")
	const [messageBodyField, setMessageBodyField] = useState("")



	const handleClose = () => {
		setOpenContactForm(false);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const data = new FormData(e.currentTarget);

		// const sendContactInfo = async (data) => {
		// 	await fetch("https://formsubmit.co/el/rinece", {
		// 		method: "POST",
		// 		headers: {
		// 			'Content-Type': 'application/json',
		// 			'Accept': 'application/json'
		// 		},
		// 		body: JSON.stringify({
		// 			data
		// 		})
		// 	}).then(response => response.json())
		// 		.then(data => console.log(data))
		// 		.catch(error => console.log(error));
		// }
		// sendContactInfo(data);

		axios.defaults.headers.post['Content-Type'] = 'application/json';
		axios.post('https://formsubmit.co/el/rinece', {
			name: "FormSubmit",
			message: "Test"
		})
			.then(response => console.log(response))
			.catch(error => console.log(error));

		console.log("Field Data:", {
			sender: data.get('email-sender'),
			title: data.get('contact-title'),
			message: data.get('contact-message'),
		})

	};



	useEffect(() => {
		if (userLoggedIn)
			setEmailField(currentUser.email)
		else
			setEmailField("")
	}, [userLoggedIn])
	return (
		<Dialog

			scroll="paper"

			fullWidth={true}
			maxWidth={"md"}

			open={openContactForm}
			TransitionComponent={Transition}
			sx={{ minWidth: "100%" }}
			keepMounted
			onClose={handleClose}
			BackdropProps={{ style: { backgroundColor: "rgba(0,0,0,0.1)" } }}
		>
			<Box
				sx={{
					marginTop: 2,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>

				<Typography component="h1" variant="h5">
					Contact us!
				</Typography>
				<Typography gutterBottom>
					Do you have a question regarding our site or what we do, or perhaps a suggestion for improvement?
				</Typography>
				<Typography>
					Send us a message at [EMAIL], or use the contact form below
				</Typography>
				<Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
					<TextField
						autoFocus
						margin="normal"
						required
						fullWidth
						value={emailField}
						id="email-sender"
						label="Your email address"
						name="email-sender"
						error={emailField !== "" && !validateEmail(emailField)}
						autoComplete="off"
						onChange={(e) => setEmailField(e.target.value)}
						helperText={emailErrorMessage(emailField)}
					/>
					<TextField
						margin="normal"
						required
						fullWidth
						name="contact-title"
						label="Title"
						id="contact-title"
						autoComplete="new-password"
						onChange={(e) => setMessageTitleField(e.target.value)}

					/>

					<TextField
						multiline
						rows={6}
						margin="normal"
						required
						fullWidth
						name="contact-message"
						label="Message"
						id="contact-message"
						autoComplete="new-password"
						onChange={(e) => setMessageBodyField(e.target.value)}

					/>

					<Button
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2 }}
						disabled={messageTitleField === "" || messageBodyField === "" || !validateEmail(emailField)}
					>
						Send message
					</Button>

					<Box container textAlign="center">

					</Box>
				</Box>

			</Box>
		</Dialog >
	)
}

export default ContactForm