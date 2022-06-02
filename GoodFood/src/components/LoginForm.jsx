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


const LoginForm = () => {

	const [userLoggedIn, setUserLoggedIn] = useRecoilState(userLoggedInState)
	const [nameField, setnameField] = useState("")
	const [passwordField, setPasswordField] = useState("")
	const [currentUser, setCurrentUser] = useRecoilState(currentUserState)

	const offlineUserList = useRecoilValue(offlineUsersState)

	const [userNotFound, setUserNotFound] = useState(false)

	const [infoMessage, setInfoMessage] = useState("")

	// const [userMatch, setUserMatch] = useState("")


	const handleSubmit = async (e) => {
		e.preventDefault();
		const data = new FormData(e.currentTarget);
		console.log("Field Data:", {
			name: data.get('name'),
			password: data.get('password'),
		})
		const name = data.get("name")
		const password = data.get("password")

		// const fetchedUserData = await fetch(`https://godfoodapi.azurewebsites.net/api/user/${name}/${password}`)
		// 	.then(response => {
		// 		if (response.ok) {
		// 			console.log(response)
		// 		} else {
		// 			console.log("error")
		// 		}
		// 	}).then(data => {
		// 		console.log(data)
		// 	})
		// 	.catch(error => console.log(error));

		// console.log(fetchedUserData)
		// else {
		// 	console.log(fetchedUserData)
		// const foundUser = JSON.parse(await fetchedUserData.text())
		// setUserMatch(foundUser)
		// }


		// const fetchedUserData = await fetch(`https://godfoodapi.azurewebsites.net/api/user/${name}/${password}`)
		// .then(response)
		// const foundUser = JSON.parse(await fetchedUserData.text())
		// console.log(foundUser)
		// setUserMatch(foundUser)

		// ------Test----
		// let userMatch;
		// const userRequest = new Request(`https://godfoodapi.azurewebsites.net/api/user/${name}/${password}`)
		// fetch(userRequest)
		// 	.then((response) => {
		// 		if (!response.ok) {
		// 			console.log("Error")
		// 		}
		// 		else {
		// 			return response.text();
		// 		}

		// 	})
		// 	.then((response) => {
		// 		console.log(response)
		// 		userMatch = response
		// 	}).catch(error => {
		// 		console.log(error)
		// 		setInfoMessage("DB offline, trying offline")
		// 		const offlineSearch = offlineUserList.find(user => name === user.name && password === user.password)
		// 		userMatch = offlineSearch
		// 	});
		// --------------



		const fetchedUserData = await fetch(`https://godfoodapi.azurewebsites.net/api/user/${name}/${password}`)
		const foundUser = JSON.parse(await fetchedUserData.text())


		// //TODO: The if check doesn't work when using the fetcheduserData version?
		// TODO: Handle wrong username/password/usernotfound etc from db
		if (foundUser !== undefined && foundUser !== "" && foundUser.name !== "") {
			setCurrentUser(foundUser)
			setUserLoggedIn(true)
			console.log("found match")
			console.log(currentUser)
		}
		else {
			setUserNotFound(true)
			console.log("no match")
			console.log(currentUser)
		}

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

				<Typography color="error.light" textAlign="center">{userNotFound ? userNotFoundMessage : infoMessage}</Typography>

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