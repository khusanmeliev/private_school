import React from 'react';
import { GlobalStyle } from './Global.style';
import { Routes, Route } from 'react-router-dom';
import Navbar from './containers/Navbar/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Directors from './Pages/Directors/Directors';
import Contact from './Pages/Contact/Contact';
import Lesson from './Pages/Advantages/Advantage';
import Footer from './Pages/Footer/Footer';
import Meals from './Pages/Meals/Meals';
import Goals from './Pages/Goals/Goals';
import Admin from './Pages/Dashboard/Admin';
import Candidates from './Pages/Dashboard/containers/Candidates/Candidates';
import Contacts from './Pages/Dashboard/containers/Contacts/Contacts';

const Main = () => (
  <GlobalStyle>
    <Navbar />
    <Home />
    <hr />
    <About />
    <hr />
    <Lesson />
    <hr />
    <Meals />
    <hr />
    <Goals />
    <Directors />
    <hr />
    <Contact />
    <Footer />
  </GlobalStyle>
);

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Main />} />
      <Route path="admin" element={<Admin />}>
        <Route index element={<Candidates />} />
        <Route path="candidates" element={<Candidates />} />
        <Route path="contacts" element={<Contacts />} />
      </Route>
    </Routes>
  );
};

export default App;
