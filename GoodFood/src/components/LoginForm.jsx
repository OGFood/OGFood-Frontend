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
import { useRecoilState, useRecoilValue } from 'recoil';
import userLoggedInState from '../atoms/userLoggedInState';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { useEffect, useRef, useState } from 'react';
import { validatePassword, validateEmail, passwordErrorMessage, emailErrorMessage, userNotFoundMessage } from '../Auth/UserValidation';
import offlineUsersState from '../atoms/offlineUsersState';
import currentUserState from '../atoms/currentUserState';

//TODO: Maybe change email to username?
//TODO: Forgotten password functionality

const LoginForm = () => {

	const [userLoggedIn, setUserLoggedIn] = useRecoilState(userLoggedInState)
	const [emailField, setEmailField] = useState("")
	const [passwordField, setPasswordField] = useState("")

	// Offline test
	const offlineUserList = useRecoilValue(offlineUsersState)
	const [currentUser, setCurrentUser] = useRecoilState(currentUserState)



	const [userNotFound, setUserNotFound] = useState(false)

	const handleSubmit = async (e) => {
		e.preventDefault();
		const data = new FormData(e.currentTarget);
		console.log("Field Data:", {
			email: data.get('email'),
			password: data.get('password'),
		})
		const email = data.get("email")
		const password = data.get("password")

		//temp login test using offline data, replace with db stuff
		const userMatch = offlineUserList.find(user => email === user.email && password === user.password)
		console.log(userMatch)
		if (userMatch !== undefined) {
			setCurrentUser(userMatch)
			setUserLoggedIn(true)
			console.log("found match")
		}
		else {
			setUserNotFound(true)
			console.log("no match")
		}
		// if email+password valid, send to backend, if user is logged in, set userloggedin state to true to change ui element visuals
		// Handle wrong username/password/usernotfound etc from db
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
				{userLoggedIn ? <AccountCircleRoundedIcon /> : <LockOutlinedIcon />}
			</Avatar>
			<Typography component="h1" variant="h5">
				Sign In
			</Typography>

			<Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
				<TextField
					autoFocus
					margin="normal"
					required
					fullWidth
					id="email"
					label="Email Address"
					name="email"
					onFocus={() => setUserNotFound(false)}
					error={emailField !== "" && !validateEmail(emailField)}
					autoComplete="off"
					onChange={(e) => setEmailField(e.target.value)}
					helperText={emailErrorMessage(emailField)}
				/>
				<TextField
					margin="normal"
					required
					fullWidth
					name="password"
					label="Password"
					type="password"
					id="password"
					onFocus={() => setUserNotFound(false)}
					error={passwordField !== "" && !validatePassword(passwordField)}
					autoComplete="new-password"
					onChange={(e) => setPasswordField(e.target.value)}
					helperText={passwordErrorMessage(passwordField)}
				/>

				{userNotFound && <Typography color="red" textAlign="center">{userNotFoundMessage}</Typography>}

				<Button
					type="submit"
					fullWidth
					variant="contained"
					sx={{ mt: 3, mb: 2 }}
					disabled={!validatePassword(passwordField) || !validateEmail(emailField)}
				>
					Sign In
				</Button>

				<Box container textAlign="center">
					<Link href="#" variant="body2">
						Forgot your password?
					</Link>

				</Box>
			</Box>

		</Box>
	)
}

export default LoginForm