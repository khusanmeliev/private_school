import React from 'react';
import { GlobalStyle } from './Global.style';
import Navbar from './containers/Navbar/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Directors from './Pages/Directors/Directors';
import Contact from './Pages/Contact/Contact';
import Lesson from './Pages/Advantages/Advantage';
import Footer from './Pages/Footer/Footer';

const App = () => {
  return (
    <GlobalStyle>
      <Navbar />
      <Home />
      <hr />
      <About />
      <hr />
      <Lesson />
      <hr />
      <Directors />
      <hr />
      <Contact />
      <Footer />
    </GlobalStyle>
  );
};

export default App;
