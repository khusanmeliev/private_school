import React from 'react';
import Navbar from './containers/Navbar/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import { GlobalStyle } from './Global.style';
import Directors from './Pages/Directors/Directors';
import Contact from './Pages/Contact/Contact';
import Lesson from './Pages/Advantages/Advantage';

function App() {
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
    </GlobalStyle>
  );
}

export default App;
