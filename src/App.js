
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import './App.css';
import { Header } from "./components/navbar/Header/Header";

import Navbar2 from './components/navbar/Navbar2';

import About from "./Pages/About";
import Blog from "./Pages/Blogs";
import Home from "./Pages/Home/Home"
import Tools from "./Pages/Tools";
import Sip from "./tools/Calculator/sip";
import Lumpsum from "./tools/Calculator/lps";


function App() {
  return (
    <div className="main-container">
    <Header />
    <Router>
      <Routes>
      <Route exact path="/" element={<Home/> }/>
          <Route  path="/about" element={<About/> }/>
          <Route  path="/blogs" element={<Blog/> }/>
      <Route  path="/tools" element={<Tools/>}/>
          <Route exact path="SIP" element={<Sip />} />
          <Route exact path="Lumpsum" element={<Lumpsum />} />
          {/* <Route exact path="Blog" element={<Lumpsum />} /> */}
          
        
      </Routes>
    </Router>

    
 

    
  
    </div>
  );
}

export default App;
