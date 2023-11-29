
import './App.css';
import Navbar from './Components/Navbar.js';
import Main from "./Components/main.js";
import About from "./Components/about.js";
import Services from './Components/Services';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main/>
      <About/>
      <Services/>
      <Portfolio/>
      <Contact/>
    </div>
  );
}

export default App;
