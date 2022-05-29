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
import { useRecoilState } from 'recoil';
import { useEffect, useRef, useState } from 'react';
import { validatePassword, validateEmail, passwordErrorMessage, emailErrorMessage, usernameErrorMessage } from '../Auth/UserValidation';





const SignUpForm = () => {

	const [userLoggedIn, setUserLoggedIn] = useRecoilState(userLoggedInState)

	const [userField, setUserField] = useState("")
	const [emailField, setEmailField] = useState("")
	const [passwordField, setPasswordField] = useState("")


	const [dbErrorPlaceholder, setDbErrorPlaceholder] = useState(false)



	const handleSubmit = async (e) => {
		e.preventDefault();
		const data = new FormData(e.currentTarget);
		const username = data.get("username")
		const email = data.get("email")
		const password = data.get("password")
		console.log({
			username: data.get("username"),
			email: data.get('email'),
			password: data.get('password'),
		});

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
							onChange={(e) => setUserField(e.target.value)}
							helperText={usernameErrorMessage(userField)}
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
							error={emailField !== "" && !validateEmail(emailField)}
							onChange={(e) => setEmailField(e.target.value)}
							helperText={emailErrorMessage(emailField)}
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
						/>
					</Grid>
				</Grid>
				{dbErrorPlaceholder && <Typography color="red" textAlign="center">Wrong user/password etc message</Typography>}
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