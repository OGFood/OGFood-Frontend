import Container from "@mui/material/Container"
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Theme from './style/muitheme'
import { ThemeProvider } from '@mui/material/styles'
import Header from './layouts/Header'
import Footer from "./layouts/Footer"
import Main from "./layouts/Main"
import './App.css'
import ScrollToTopButton from "./components/ScrollToTopButton";



function App() {

  /**
   *  TODO: 
   *        Remove misc help borders/colours
   *        Resize favicon properly
   * 
   *        
   * 
   *        Layout: 
   *          View large recipe
   */


  // For Material-UI (MUI) documentation - https://mui.com/material-ui/getting-started/usage/

  return (
    <>
      <ThemeProvider theme={Theme}>
        <CssBaseline />
        <Box sx={{ bgcolor: "mainbg.main", minHeight: "100vh" }}>
          <Header />
          <Main />
        </Box>
        <Footer />
        <ScrollToTopButton />
      </ThemeProvider>


    </>
  )
}

export default App