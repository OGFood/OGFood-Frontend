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
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


const Transition = forwardRef(function Transition(props, ref) {
	return <Slide direction="left" ref={ref} {...props} />;
});

const LoginSignUpContainer = () => {

	const [openContainer, setOpenContainer] = useRecoilState(openLoginSignUpState)
	const [value, setValue] = useState(2);



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
			maxWidth={"md"}

			open={openContainer}
			TransitionComponent={Transition}
			sx={{ minWidth: "100%" }}
			keepMounted
			onClose={handleClose}
			BackdropProps={{ style: { backgroundColor: "rgba(0,0,0,0.1)" } }}
		>

			<Tabs value={value} onChange={handleChange}>
				<Tab label="Login" />
				<Tab label="Sign Up" />
			</Tabs>


		</Dialog>
	)
}

export default LoginSignUpContainer