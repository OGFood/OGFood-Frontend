import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import userLoggedInState from '../atoms/userLoggedInState';
import offlineUsersState from '../atoms/offlineUsersState';
import currentUserState from '../atoms/currentUserState';
import { useRecoilState } from 'recoil';
import { useEffect, useRef, useState } from 'react';
import { validatePassword, validateEmail, passwordErrorMessage, emailErrorMessage, usernameErrorMessage, usernameAlreadyExists, emailAlreadyInUse } from '../Auth/UserValidation';


const SignUpForm = () => {

	const [users, setUsers] = useRecoilState(offlineUsersState)

	const [userField, setUserField] = useState("")
	const [emailField, setEmailField] = useState("")
	const [passwordField, setPasswordField] = useState("")

	const [successfulSignUp, setSuccessfulSignUp] = useState(false)

	const [infoMessage, setInfoMessage] = useState("")

	const usernameRef = useRef()
	const emailRef = useRef()
	const passRef = useRef()

	const resetTextFields = () => {
		usernameRef.current.value = ""
		emailRef.current.value = ""
		passRef.current.value = ""
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		const data = new FormData(e.currentTarget);
		const username = data.get("username")
		const email = data.get("email")
		const password = data.get("password")

		//TODO: Check if username exists in db 
		if (usernameAlreadyExists(username, users)) {
			setSuccessfulSignUp(false)
			setInfoMessage("A user with that username already exists.")
		}
		else if (emailAlreadyInUse(email, users)) {
			setSuccessfulSignUp(false)
			setInfoMessage("The chosen email adress is already in use.")
		}
		else {
			setSuccessfulSignUp(true)
			setInfoMessage("Succesfully signed up!")

			const newUser = JSON.stringify({ Name: username, Mail: email, Password: password, Salt: "", CupBoard: [{ Id: "62752775d119403fdea76b63", Name: "Paprika" }] })
			const requestOptions = {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: newUser
			};

			fetch('https://godfoodapi.azurewebsites.net/api/user/', requestOptions)
				.then(response => console.log(response.json()))


			setUsers([...users,
			{ username: username, email: email, password: password }])

			resetTextFields()

		}

		console.log(users)
	};




	return (
		<Box
			sx={{
				marginTop: 2,
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}
		>
			<Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
				<AccountCircleRoundedIcon />
			</Avatar>
			<Typography component="h1" variant="h5">
				Sign up
			</Typography>
			<Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<TextField
							autoComplete="off"
							name="username"
							required
							fullWidth
							id="username"
							label="Username"
							autoFocus
							onFocus={() => setInfoMessage("")}
							onChange={(e) => setUserField(e.target.value)}
							helperText={usernameErrorMessage(userField)}
							inputRef={usernameRef}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							autoComplete="new-password"
							required
							fullWidth
							id="email"
							label="Email Address"
							name="email"
							onFocus={() => setInfoMessage("")}
							error={emailField !== "" && !validateEmail(emailField)}
							onChange={(e) => setEmailField(e.target.value)}
							helperText={emailErrorMessage(emailField)}
							inputRef={emailRef}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							required
							fullWidth
							name="password"
							label="Password"
							type="password"
							id="password"
							autoComplete="new-password"
							error={passwordField !== "" && !validatePassword(passwordField)}
							onChange={(e) => setPasswordField(e.target.value)}
							helperText={passwordErrorMessage(passwordField)}
							inputRef={passRef}
						/>
					</Grid>
				</Grid>

				<Typography marginTop="1rem" color={successfulSignUp ? "success.light" : "error.light"} textAlign="center">{infoMessage}</Typography>


				<Button
					type="submit"
					fullWidth
					variant="contained"
					disabled={!validatePassword(passwordField) || !validateEmail(emailField)}
					sx={{ mt: 3, mb: 2 }}
				>
					Sign Up
				</Button>
			</Box>
		</Box>
	)
}

export default SignUpForm