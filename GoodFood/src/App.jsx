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
   * 
   *        Basic layout:
   *          Wrapper container with 100vw 100vh to contain all items
   * 
   *        Layout: 
   *          Intro section
   *          Container/Box for input+ingredientlist
   *          Grid container for ingredientlist results
   *          Grid container for multiple recipes
   *          View large recipe
   * 
   * 
   *        Folder Structure:
   *          Components (recipe card, buttons, etc)
   */

  return (
    <>


      <ThemeProvider theme={Theme}>
        <CssBaseline />
        <Box sx={{ bgcolor: "mainbg.main" }}>
          <Header />
          <Main />
          <Footer />
        </Box>
        <ScrollToTopButton />
      </ThemeProvider>


    </>
  )
}

export default App