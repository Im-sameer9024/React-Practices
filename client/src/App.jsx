import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar";
import Checkout from "./pages/checkout/Checkout";
import Home from "./pages/Home/Home";

import { useState } from "react";
import Checkoutform from "./pages/checkout/Checkoutform";
import Login from "./pages/LoginInPop/Login";
import ChatBox from "./pages/Chat/ChatBox";




export default function App() {

  
  const[showLogin,setShowLogin] = useState(false)
  return (
    <>
    {
      showLogin ? <Login setShowLogin={setShowLogin}/> : <> </>
    }
      <Navbar setShowLogin={setShowLogin}/>
      
      <Routes>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Checkoutform/>}/>
        <Route path="/chat" element={<ChatBox/>}/>
      </Routes>
      <Footer/>
      
    </>
  )
}
