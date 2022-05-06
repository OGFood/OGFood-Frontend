import { Container, createTheme, Box, AppBar } from '@mui/material'
import Theme from './style/muitheme'
import './App.css'
import { ThemeProvider } from '@mui/system'

function App() {


  return (
    <ThemeProvider theme={Theme}>
      <div className="App">
        This is an empty page
      </div>
    </ThemeProvider>
  )
}

export default App
