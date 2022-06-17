import Navbar from './Pages/Navbar/Navbar'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import { GlobalStyle } from './Global.style';
function App() {
  return <GlobalStyle>
    <Navbar/>
    <Home/>
    <About/>
  </GlobalStyle>;
}

export default App;
