
import './App.css';
import HomePage from './Components/Pages/HomePage';
import NavBar from './Components/NavBar';
import Men from './Components/Pages/Men';
import Women from './Components/Pages/Women';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { Routes, Route , Link } from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff6347', 
    },
    secondary: {
      main: '#a09484', 
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/men' element={<Men/>}/>
        <Route path='/Women' element={<Women/>}/>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
