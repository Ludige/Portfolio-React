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
    },
    secondary:{
      main:"#FFFFFF",
    }
  }
});

function MyRootApp() {
  // Use useEffect here to initialize AOS
  useEffect(() => {
    AOS.init({
      // Configure AOS options here if needed
    });
  }, []);  // Empty dependency array ensures it runs only once

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