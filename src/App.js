import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './components/GlobalStyles/GlobalStyles';

//pages
import NavBar from './components/NavBar/NavBar';
import HomePage from './pages/HomePage/HomePage';

const theme = {
  colors: {
    primary: '#389BF2',
    yellow: '#FFF402',
    yellow2: '#FEDC00',
    lightGray: '#9a9a9a',
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />

        <Router>
          <NavBar />

          <Routes>
            <Route exact path="/" element={<HomePage />} />
          </Routes>
        </Router>
      </>
    </ThemeProvider>
  );
}

export default App;
