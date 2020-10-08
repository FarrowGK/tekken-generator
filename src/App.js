import React from 'react';
import { ButtonThemes } from './Material-UI/ButtonThemes';
import { Container, AppBar } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import theme from './Themes';
import DenseAppBar from './Material-UI/DenseAppBar';
import AppContainer from './Material-UI/AppContainer';
import BottomNavigationComponent from './Material-UI/BottomNaviagtionComponent';

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <DenseAppBar />
        <AppContainer />
        {/* <CssBaseline />
        <Box color="white" bgcolor="palevioletred">
          <h1>i'm tired of being tortured</h1>
          <ButtonThemes />
        </Box> */}
        <BottomNavigationComponent />
      </ThemeProvider>
    </div>
  );
}

export default App;
