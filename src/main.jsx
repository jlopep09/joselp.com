import { createRoot } from 'react-dom/client'
import Home from './Home.jsx'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter, Routes, Route } from "react-router";
import "./main.css"

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#212121',
    },
  },
});

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
</ThemeProvider>

)




