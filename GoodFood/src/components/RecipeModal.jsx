import { useState } from "react";
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
import { IconButton } from '@mui/material';
import Modal from "@mui/material/Modal";
import { ExpandMoreOutlined, ExpandCircleDown, ExpandLessOutlined } from '@mui/icons-material';

const RecipeModal = ({ recipe }) => {

	const style = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 400,
		bgcolor: 'background.paper',
		border: '2px solid #000',
		boxShadow: 24,
		p: 4,
	};

	return (

		<Modal
		// open={open}
		// onClose={handleClose}
		>
			<Box sx={style}>
				<Typography variant="h6" component="h2">
					Test
				</Typography>
			</Box>
		</Modal>
	)
}

export default RecipeModal