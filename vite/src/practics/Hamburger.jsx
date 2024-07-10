import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Hamburger = () => {
  const [showMenu, setShowMenu] = useState(false);

  

  return (
    <div>
      <div onClick={() => setShowMenu(!showMenu)} className=" mt-5 ml-5 outline inline-block p-1">
        <GiHamburgerMenu />
      </div>
      <div className="menu ">
          <ul className=" bg-slate-200 inline-block p-2">
            <li className=" hover:bg-slate-500  cursor-pointer px-2">Home</li>
            <li className=" hover:bg-slate-500 cursor-pointer  px-2">About</li>
            <li className=" hover:bg-slate-500 cursor-pointer  px-2">
              Contact
            </li>
            <li className=" hover:bg-slate-500 cursor-pointer  px-2">
              Services
            </li>
          </ul>
      </div>
    </div>
  );
};

export default Hamburger;
