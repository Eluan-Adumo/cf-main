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
import Services from './Pages/Services';
import FAQ from './Pages/FAQ';
import BlogPage from './Pages/BlogPage';

import { AnimatePresence } from "framer-motion";
function App() {
  const location = useLocation();
  const {pathname} =useLocation()
  useEffect(() => {
    window.scroll({
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
     });
  },[pathname]);
  return (
    
   <>
   
      <Navbar />
      <AnimatePresence>
        <Routes location = {location} key = {location.pathname}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/testimonies' element={<Testimonies />} />
          <Route path='/team' element={<Team />} />
          <Route path='/contactus' element={<Contact />} />
          <Route path='/getquote' element={<GetQuote />} />
          <Route path='/services' element={<Services />} />
          <Route path='/faq' element={<FAQ />} />
          <Route path='/blog' element={<BlogPage />} />
        </Routes>
      </AnimatePresence>
   </>
    
  );
}

export default App;
