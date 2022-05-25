import { useState, forwardRef, useEffect } from "react";
import Card from '@mui/material/Card';
import Paper from "@mui/material/Paper"
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
import Slide from '@mui/material/Slide';
import { IconButton, Toolbar } from "@mui/material";
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import SelectPortionSize from "./SelectPortionSize";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';




const AmountHelperModal = ({ open, setOpen }) => {


	const handleClose = () => {
		setOpen(false);
	};

	const units = [
		{ unit: "liter", short: "l", correlation: "1 l = 10 dl = 100 cl = 1000 ml" },
		{ unit: "deciliter", short: "dl", correlation: "1 dl = 10 cl = 100 ml" },
		{ unit: "centiliter", short: "cl", correlation: "	1 cl = 10 ml" },
		{ unit: "mililiter", short: "ml", correlation: "1 ml = 1 krm" },
		{ unit: "matsked", short: "msk", correlation: "1 msk = 3 tsk = 15 ml" },
		{ unit: "tesked", short: "tsk", correlation: "1 tsk = 5 krm = 5 ml" },
		{ unit: "kryddmått", short: "krm", correlation: "1 krm = 1 ml" },
		{ unit: "piece", short: "pc", correlation: "" },
	]

	return (
		<Dialog
			scroll="body"
			fullWidth={true}
			maxWidth={"xs"}
			open={open}
			keepMounted
			sx={{}}

			onClose={handleClose}
			BackdropProps={{ style: { backgroundColor: "rgba(0,0,0,0.1)" } }}>

			<TableContainer >
				<TableRow>
					<TableCell> Unit </TableCell>
					<TableCell> Shortening </TableCell>
					<TableCell> Correlation </TableCell>
				</TableRow>
				{units.map((unit) => (
					<TableRow>
						<TableCell>{unit.unit}</TableCell>
						<TableCell>{unit.short}</TableCell>
						<TableCell>{unit.correlation}</TableCell>
					</TableRow>
				))}
			</TableContainer>
		</Dialog>
	)
}

export default AmountHelperModal