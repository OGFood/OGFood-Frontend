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


/**
 * How to change email adressed used to receive messages from the form:
 * Replace the email adress in the <Box component="form" action = "https://formsubmit.co/your@email.com" with any mail (a tempmail works, eg https://temp-mail.org/en/ ).
 * When sending the message the first time, the email you used will receive an activation link and a code it tells you to use.
 * When you have the code, replace the email in the formsubmit.co link with the code. Like so "https://formsubmit.co/7e99bc6dc945bb0aa431020cc4947cd8"
 * Any mail sent through the GodFood contact form will be sent to the tempmail or normal mail you signed up with.
 */


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
		// const data = new FormData(e.currentTarget);

		// console.log("Field Data:", {
		// 	sender: data.get('email-sender'),
		// 	title: data.get('contact-title'),
		// 	message: data.get('contact-message'),
		// })

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
					mb: 2,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>


				<Typography component="h1" variant="h5">
					Contact Us
				</Typography>
				<Typography gutterBottom>
					<span style={{ color: "#A6B727", fontSize: "3rem" }}><i className="fa-solid fa-envelope-open-text fa-xl"></i></span>
				</Typography>
				<Typography gutterBottom mt="1rem">
					Do you have a question regarding our site or what we do, or perhaps a suggestion for improvement?
				</Typography>
				<Typography>
					Send us a message at <Link href="mailto:godfood@theplate.com">godfood@theplate.com</Link> or use the contact form below.

				</Typography>

				<Box component="form" target="_blank" action="https://formsubmit.co/93fb459e6390c9820be22957756d070c " method="POST" noValidate sx={{ mt: 1 }}>
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
						sx={{ mt: 3, mb: 2, }}
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