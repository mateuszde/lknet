import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './components/GlobalStyles/GlobalStyles';

//fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

//Navigation + Footer Components
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

//pages
import HomePage from './pages/HomePage/HomePage';

const theme = {
  colors: {
    primary: '#389BF2',
    yellow: '#FFF402',
    yellow2: '#FEDC00',
    lightGray: '#9a9a9a',
  },
};

library.add(faPhone, faEnvelope);

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

          <Footer />
        </Router>
      </>
    </ThemeProvider>
  );
}

export default App;
