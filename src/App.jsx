import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.scss";

import Navbar from "./components/Navbar/Navbar";
import { Home, About, Portfolio, Contact } from "./pages/index";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/portfolio' element={<Portfolio />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/contact' element={<Contact />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
