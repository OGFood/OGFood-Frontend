import { useRecoilState } from "recoil"
import { useState, forwardRef } from "react";
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
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import userLoggedInState from '../atoms/userLoggedInState';
import UserInfoPage from "./UserInfoPage";

const Transition = forwardRef(function Transition(props, ref) {
	return <Slide direction="down" ref={ref} {...props} />;
});

// Boilerplate from Mui-Tabs
function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Box>{children}</Box>
				</Box>
			)}
		</div>
	);
}



//TODO: Display new information on logout page ex "logged in as..". Display new stuff on "Sign up"-tab when logged in, ex "change password"?

//TODO: Login - Validate login info: check if username/mail(?) exists using db stuff / check if password is valid. Error text under field. When logged in, load ingredients from user db into ingredients state?



const LoginSignUpContainer = () => {
	const [userLoggedIn, setUserLoggedIn] = useRecoilState(userLoggedInState)
	const [openContainer, setOpenContainer] = useRecoilState(openLoginSignUpState)
	const [value, setValue] = useState(1);



	const handleClose = () => {
		setOpenContainer(false);
	};
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	return (

		<Dialog

			scroll="paper"

			fullWidth={true}
			maxWidth={"xs"}

			open={openContainer}
			TransitionComponent={Transition}
			sx={{ minWidth: "100%" }}
			keepMounted
			onClose={handleClose}
			BackdropProps={{ style: { backgroundColor: "rgba(0,0,0,0.1)" } }}
		>
			<Paper sx={{ minHeight: "550px" }} >
				<Tabs centered value={value} onChange={handleChange}>
					<Tab label={!userLoggedIn ? "Log in" : "User"} value={1} />
					{!userLoggedIn && <Tab label="Sign Up" value={2} />}
				</Tabs>
				<TabPanel value={value} index={1}>
					{userLoggedIn ? <UserInfoPage /> : <LoginForm />}
				</TabPanel>

				<TabPanel value={value} index={2}>
					{!userLoggedIn && <SignUpForm />}
				</TabPanel>
			</Paper>
		</Dialog>
	)
}

export default LoginSignUpContainer