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
import { validatePassword, validateEmail, validateUsername, passwordErrorMessage, emailErrorMessage, userNotFoundMessage, usernameErrorMessage } from '../Auth/UserValidation';
import offlineUsersState from '../atoms/offlineUsersState';
import currentUserState from '../atoms/currentUserState';

//TODO: Forgotten password functionality?

const LoginForm = () => {

	const [userLoggedIn, setUserLoggedIn] = useRecoilState(userLoggedInState)
	const [nameField, setnameField] = useState("")
	const [passwordField, setPasswordField] = useState("")

	// Offline test
	const offlineUserList = useRecoilValue(offlineUsersState)
	const [currentUser, setCurrentUser] = useRecoilState(currentUserState)

	const [userNotFound, setUserNotFound] = useState(false)



	const handleSubmit = async (e) => {
		e.preventDefault();
		const data = new FormData(e.currentTarget);
		console.log("Field Data:", {
			name: data.get('name'),
			password: data.get('password'),
		})
		const name = data.get("name")
		const password = data.get("password")

		//temp login test using offline data, replace with db stuff
		const userMatch = offlineUserList.find(user => name === user.username && password === user.password)
		console.log(userMatch)

		// TODO: If fetchedUserData fails, make it use the offline version

		// const fetchedUserData = await fetch(`https://localhost:7144/api/user/${name}/${password}`)
		// console.log(fetchedUserData)

		// if (fetchedUserData.ok)
		// const userMatch = JSON.parse(await fetchedUserData.text())



		console.log(userMatch)
		//TODO: The if check doesn't work when using the fetcheduserData version?
		if (userMatch !== undefined) {
			setCurrentUser(userMatch)
			setUserLoggedIn(true)
			console.log("found match")
			console.log(currentUser)
		}
		else {
			setUserNotFound(true)
			console.log("no match")
			console.log(currentUser)
		}
		// if name+password valid, send to backend, if user is logged in, set userloggedin state to true to change ui element visuals
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
					id="name"
					label="Username"
					name="name"
					onFocus={() => setUserNotFound(false)}
					error={nameField !== "" && !validateUsername(nameField)}
					autoComplete="off"
					onChange={(e) => setnameField(e.target.value)}
					helperText={usernameErrorMessage(nameField)}
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

				{userNotFound && <Typography color="error.light" textAlign="center">{userNotFoundMessage}</Typography>}

				<Button
					type="submit"
					fullWidth
					variant="contained"
					sx={{ mt: 3, mb: 2 }}
					disabled={!validatePassword(passwordField) || !validateUsername(nameField)}
				>
					Sign In
				</Button>

				{/* <Box container textAlign="center">
					<Link href="#" variant="body2">
						Forgot your password?
					</Link>

				</Box> */}
			</Box>

		</Box>
	)
}

export default LoginForm