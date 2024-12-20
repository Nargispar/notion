
import './App.css';
import HomePage from './Components/Pages/HomePage';
import NavBar from './Components/NavBar';
import Men from './Components/Pages/Men';
import Women from './Components/Pages/Women';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { Routes, Route  } from 'react-router-dom';
import Shop from './Components/Pages/Shop';
import NewArrivals from './Components/Pages/NewArrivals';
import ProductDetail from './Components/Pages/ProductDetail';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fff', 
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
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/shop/card/:id' element={<ProductDetail/>}/>
        <Route path='/men' element={<Men/>}/>
        <Route path='/Women' element={<Women/>}/>
        <Route path='/newarrivals' element={<NewArrivals/>}/>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
