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
import { useRecoilState } from 'recoil';
import userLoggedInState from '../atoms/userLoggedInState';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';


const LoginForm = () => {

	const [userLoggedIn, setUserLoggedIn] = useRecoilState(userLoggedInState)



	const handleSubmit = (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		console.log({
			email: data.get('email'),
			password: data.get('password'),
		})
		setUserLoggedIn(true)
		console.log("user is signed in")
	};

	const handleLogout = (e) => {
		e.preventDefault();
		setUserLoggedIn(false)
		console.log("user is logged out")
	}

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
					margin="normal"
					required
					fullWidth
					id="email"
					label="Email Address"
					name="email"
					autoComplete="off"
					autoFocus
				/>
				<TextField
					margin="normal"
					required
					fullWidth
					name="password"
					label="Password"
					type="password"
					id="password"
					autoComplete="new-password"
				/>


				<Button
					type="submit"
					fullWidth
					variant="contained"
					sx={{ mt: 3, mb: 2 }}
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