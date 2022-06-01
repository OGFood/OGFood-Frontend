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
import Divider from "@mui/material/Divider"
import { useRecoilState, useRecoilValue } from 'recoil';
import userLoggedInState from '../atoms/userLoggedInState';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import currentUserState from '../atoms/currentUserState';
import { useEffect, useState } from 'react';

const UserInfoPage = () => {

	const [userLoggedIn, setUserLoggedIn] = useRecoilState(userLoggedInState)

	const [currentUser, setCurrentUser] = useRecoilState(currentUserState)

	const handleLogout = async (e) => {
		e.preventDefault();
		setCurrentUser("")
		setUserLoggedIn(false)
		console.log("user is logged out")
	}


	return (
		<Box
			sx={{
				marginTop: 1,
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}
		>
			<Avatar sx={{ m: 1, bgcolor: 'primary.main', height: "55px", width: "55px" }}>
				<AccountCircleRoundedIcon sx={{ height: "50px", width: "50px" }} />
			</Avatar>
			<Typography component="p" variant="h4" color="primary.dark">
				{currentUser.name}
			</Typography>

			<Typography component="p" variant="h6" color="primary.dark">
				{currentUser.mail}
			</Typography>
			<Typography component="p" variant="body1">

			</Typography>
			<Box component="div" sx={{ paddingTop: "3rem", textAlign: "center" }}>
				<Typography gutterBottom textAlign="center"> Welcome, {currentUser.name} </Typography>
				<Divider></Divider>
				<Typography mt="10px" mb="5px"> Quote of The Day</Typography>
				<Typography fontStyle="italic"> I cook with wine, sometimes I even add it to the food.</Typography>
				<Typography > - W.C. Fields</Typography>
			</Box>




			<Button
				type=""
				onClick={(e) => handleLogout(e)}
				fullWidth
				variant="contained"
				sx={{ mt: 3, mb: 2, position: "absolute", maxWidth: 175, bottom: "3rem", }}
			>
				Log out
			</Button>



		</Box >
	)
}

export default UserInfoPage