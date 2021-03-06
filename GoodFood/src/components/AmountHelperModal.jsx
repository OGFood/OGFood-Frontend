import Paper from "@mui/material/Paper"
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Collapse from '@mui/material/Collapse';
import Dialog from "@mui/material/Dialog";
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
		{ unit: "Kilo", short: "kg", correlation: "1 kg = 1000 g" },
		{ unit: "Gram", short: "g", correlation: "1 g = 1/1000 kg" },
		{ unit: "Liter", short: "l", correlation: "1 l = 10 dl = 100 cl = 1000 ml" },
		{ unit: "Deciliter", short: "dl", correlation: "1 dl = 10 cl = 100 ml" },
		{ unit: "Centiliter", short: "cl", correlation: "1 cl = 10 ml" },
		{ unit: "Mililiter", short: "ml", correlation: "1 ml = 1 krm" },
		{ unit: "Matsked", short: "msk", correlation: "1 msk = 3 tsk = 15 ml" },
		{ unit: "Tesked", short: "tsk", correlation: "1 tsk = 5 krm = 5 ml" },
		{ unit: "Kryddmått", short: "krm", correlation: "1 krm = 1 ml" },
		{ unit: "Piece", short: "pc", correlation: "" },
	]

	return (
		<Dialog
			scroll="body"
			fullWidth={false}
			maxWidth="xs"
			open={open}
			keepMounted

			onClose={handleClose}
			BackdropProps={{ style: { backgroundColor: "rgba(0,0,0,0.1)" } }}>

			<TableContainer sx={{ wordWrap: "" }}>
				<TableRow >
					<TableCell sx={{ fontWeight: "medium" }} > Unit </TableCell>
					<TableCell sx={{ fontWeight: "medium" }}> Shortening </TableCell>
					<TableCell sx={{ fontWeight: "medium" }}> Correlation </TableCell>
				</TableRow>
				{units.map((unit) => (
					<TableRow>
						<TableCell >{unit.unit}</TableCell>
						<TableCell >{unit.short}</TableCell>
						<TableCell>{unit.correlation}</TableCell>
					</TableRow>
				))}
			</TableContainer>
		</Dialog>
	)
}

export default AmountHelperModal