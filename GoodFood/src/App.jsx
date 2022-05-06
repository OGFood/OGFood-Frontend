import { Container, createTheme, Box, Typography, CssBaseline } from '@mui/material'
import Theme from './style/muitheme'
import { ThemeProvider } from '@mui/material/styles'
import Header from './Layouts/Header'
import './App.css'






function App() {


  /**
   *  TODO: 
   * 
   *        Basic layout:
   *          Wrapper container with 100vw 100vh to contain all items
   *          Responsive Header with logo+name)
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
   *          Layout folder (header/main/footer/etc)
   *          Assets  (fonts, icons, images)
   *          Components (recipe card, buttons, etc)
   */


  return (
    <>
      <CssBaseline />

      <ThemeProvider theme={Theme}>
        <Header />
        <Box sx={{ bgcolor: "mainbg.main", minHeight: "100vh" }}>
          <Container sx={{ bgcolor: "white" }}>
            Inner section
          </Container>
        </Box>
      </ThemeProvider>


    </>
  )
}

export default App
