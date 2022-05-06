import { Container, Toolbar } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';


const Header = () => {
	return (
		<>

			<AppBar position='relative'>

				<Typography variant='h2' component="h1" margin={1} textAlign={"center"}>
					God Food
				</Typography>
			</AppBar>

		</>
	)


}

export default Header