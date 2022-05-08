import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from "@mui/material/Container"
import Paper from '@mui/material/Paper';
import Card from "@mui/material/Card"
import Grid from '@mui/material/Grid';
import RecipePreviewCard from '../components/RecipePreviewCard';
import { styled } from '@mui/material/styles';
import Logo from "../assets/images/logo-notext-white-small.png"
import MenuIcon from '@mui/icons-material/Menu';
import { margin, textAlign } from '@mui/system';
import FoodBg from "../assets/images/foodbg.png"
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';


// TODO: Make a proper "recipe-preview" card/paper.

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
const tempDataRecipes = [{
	name: "Pasta Bolognese",
	ingredients: ["pasta", "minced meat", "tomatoes"],
	imgSrc: "https://cdn-rdb.arla.com/Files/arla-se/629559204/0a998d4e-d757-4ef1-9915-48189679c1eb.jpg?mode=crop&w=1269&h=715&ak=f525e733&hm=e78d4790",
},
{
	name: "Pizza",
	ingredients: ["dough", "cheese", "whatever"],
	imgSrc: "https://cdn-rdb.arla.com/Files/arla-se/66124392/d83377a8-d3ea-46bc-aee6-fca575172aef.jpg?crop=(0,0,0,-148)&w=1269&h=715&ak=f525e733&hm=5c342ed7",
},
{
	name: "Pasta Bolognese",
	ingredients: ["pasta", "minced meat", "tomatoes"],
	imgSrc: "https://cdn-rdb.arla.com/Files/arla-se/629559204/0a998d4e-d757-4ef1-9915-48189679c1eb.jpg?mode=crop&w=1269&h=715&ak=f525e733&hm=e78d4790",
},
{
	name: "Pizza",
	ingredients: ["dough", "cheese", "whatever"],
	imgSrc: "https://cdn-rdb.arla.com/Files/arla-se/66124392/d83377a8-d3ea-46bc-aee6-fca575172aef.jpg?crop=(0,0,0,-148)&w=1269&h=715&ak=f525e733&hm=5c342ed7",
},
{
	name: "Pasta Bolognese",
	ingredients: ["pasta", "minced meat", "tomatoes"],
	imgSrc: "https://cdn-rdb.arla.com/Files/arla-se/629559204/0a998d4e-d757-4ef1-9915-48189679c1eb.jpg?mode=crop&w=1269&h=715&ak=f525e733&hm=e78d4790",
},
];

const tempDataIngredients = ["chicken", "tomatoe", "pasta", "fish", "dough", "cucumber"]

const displayRecipes = tempDataRecipes.map((recipe) => (
	<Grid item xs={12} sm={6} lg={4}>
		<RecipePreviewCard recipe={recipe} />
	</Grid >
));

const Main = () => {

	return (
		<Container sx={{ bgcolor: "mainbg.main", minHeight: "100vh" }} maxWidth="xl" >

			{/* <Box sx={{
				backgroundImage: `url(${FoodBg})`,
				bgcolor: "primary.light",
				padding: "100px",
				borderRadius: "2rem",
				marginTop: "2rem"
			}}> */}
			<Box sx={{ bgcolor: "mainbg.main" }}>
				<Typography variant='h5' component="h2">
					Enter the ingredients you have at hand
				</Typography>

				<Autocomplete
					multiple
					id="ingredients"
					options={tempDataIngredients}
					disableCloseOnSelect
					getOptionLabel={(option) => option}
					renderOption={(props, option, { selected }) => (
						<li {...props}>
							<Checkbox
								icon={icon}
								checkedIcon={checkedIcon}
								style={{ marginRight: 8 }}
								checked={selected}
							/>
							{option}
						</li>
					)}
					style={{ width: 500 }}
					renderInput={(params) => (
						<TextField {...params} label="Ingredients" placeholder="Select ingredients" style={{ backgroundColor: "white" }} />
					)} />

			</Box>



			{/* </Box> */}
			<Box marginTop={"4rem"}>
				<Grid container spacing={2} justifyContent={"center"}>
					{/* <Grid item xs={12} md={6} lg={4}>
					<Item>xs=8</Item>
				</Grid> */}
					{displayRecipes}
				</Grid>
			</Box>
		</Container >
	)
}

export default Main