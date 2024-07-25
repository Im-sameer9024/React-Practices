/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import { assets } from "../../assets/assests"
import { useContext } from "react";
import { StoreContext } from "../../Context-API/StoreContext";

export default function Navbar({setShowLogin}) {

  
  const {getTotalCartAmount} = useContext(StoreContext)

  function moverDown(id){
    const element = document.querySelector(id);
    if(element){
      element.scrollIntoView({behavior:"smooth"})
    }
  }

  return (
    <div className=' w-[100vw] z-10 h-auto fixed top-2 bg-transparent '>
       <div className=" w-10/12 mx-auto flex justify-between items-center bg-black px-3 rounded-xl">
        {/* Logo section  */}
        <div>
          <img src={assets.logo} alt="logo" className=" w-[200px]" />
         </div>
         {/* List section  */}
         <div className="list-section">
             <ul className=" flex space-x-6 text-white relative">
               <Link onClick={() => moverDown("#home")} to="/" >HOME</Link>
               <Link onClick={()=>moverDown("#about")}>ABOUT</Link>
               <Link onClick={()=>moverDown("#event")}>Events</Link>
               <Link to="/chat">Chat</Link>
               <Link to="/checkout">CHECKOUT</Link>
               <button onClick={() =>setShowLogin(true)} className="border-2 px-3 rounded-xl" >Sign-Up</button>
               
                {
            getTotalCartAmount() === 0 ? "":<div className=" bg-red-500 w-3 h-3 rounded-full absolute top-[-4px] right-[6.3rem]"></div>
          }
               
             </ul>
         </div>
       </div>
    </div>
  )
}
