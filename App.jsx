import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Doctors from "./Pages/Doctors";
import Blogspage from "./Pages/Blogspage";
import Shop from "./Pages/Shop.jsx";
import FAQ from "./Pages/FAQ.jsx";
import Appoiment from "./Pages/Appoiment.jsx";
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Contact from './Pages/Contact.jsx'
import About from './Pages/About.jsx'
import Blogdetails from "./Pages/Blogdetails.jsx";
import Productdetails from './Pages/Productdetails.jsx'
import Payment from './Pages/Payment.jsx'
import Checkout from './Pages/Checkout.jsx'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Appoinment" element={<Appoiment />} />
        <Route path="/Doctors" element={<Doctors />} />
        <Route path="/Blogspage" element={<Blogspage />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Blogdetails" element={<Blogdetails/>} />
        <Route path="/Payment" element={<Payment/>} />
        <Route path="/Productdetails" element={<Productdetails/>} />
        <Route path="/Checkout" element={<Checkout/>} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
