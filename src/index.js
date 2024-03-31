import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createTheme, ThemeProvider } from "@mui/material";
import AOS from 'aos';

import reportWebVitals from './reportWebVitals';

const theme = createTheme({
  palette:{
    primary:{
      main: "#FFFFFF",
      contrastText: "purple",
      fontFamily:"Atlan"
    },
    secondary:{
      main:"#FFFFFF",
      fontFamily:"Atlan",
    }
  }
});

function MyRootApp() {
  useEffect(() => {
    AOS.init({
    });
  }, []);
  
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<MyRootApp/>);


reportWebVitals();