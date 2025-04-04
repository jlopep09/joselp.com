import "./App.css"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#212121',
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <main className="flex items-start justify-center w-full h-dvh bg-stone-900">
        <p className="my-20">Web en construcción</p>
      </main>
    </ThemeProvider>
  );
}