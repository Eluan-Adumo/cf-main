import {
  Route,
  Routes,
  useLocation,
  useParams,
  BrowserRouter,
} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Pricing from './Pages/Pricing';
import Testimonies from './Pages/Testimonies';
import Team from './Pages/Team';
import Contact from './Pages/Contact';
import Navbar from './Components/Headers';
import { useEffect } from 'react';
import GetQuote from './Pages/GetQuote';
function App() {
  const {pathname} =useLocation()
  useEffect(() => {
    window.scrollTo(0,0)
  },[pathname]);
  return (
    
   <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/testimonies' element={<Testimonies />} />
        <Route path='/team' element={<Team />} />
        <Route path='/contactus' element={<Contact />} />
        <Route path='/getquote' element={<GetQuote />} />
      </Routes>
   </>
    
  );
}

export default App;
