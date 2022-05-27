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


const UserInfoPage = () => {

	const [userLoggedIn, setUserLoggedIn] = useRecoilState(userLoggedInState)


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
				<AccountCircleRoundedIcon />
			</Avatar>
			<Typography component="h1" variant="h5">
				"USERNAME"
			</Typography>

			<Box component="div" sx={{ mt: 1 }}>

			</Box>

			<Box sx={{ mt: 1 }}>

				<Typography> Welcome, "USERNAME"</Typography>
				<Button
					type=""
					onClick={(e) => handleLogout(e)}
					fullWidth
					variant="contained"
					sx={{ mt: 3, mb: 2 }}
				>
					Log out
				</Button>
			</Box>
		</Box>
	)
}

export default UserInfoPage