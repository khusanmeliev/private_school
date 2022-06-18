import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import { GlobalStyle } from "./Global.style";
import Directors from "./Pages/Directors/Directors";
import Advantage from "./Pages/Lessons/Advantage";
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <GlobalStyle>
      <Navbar />
      <Home />
      <About />
      <Directors />
      <Advantage />
      <Contact />
    </GlobalStyle>
  );
}

export default App;
