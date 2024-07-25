import { assets } from "../../assets/assests";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";



export default function Footer() {
  return (
    <div className="w-[100vw] bg-slate-200">
      <div className="w-10/12 mx-auto mt-[5rem] pb-[2rem]">
        {/* First section  */}
        <div className=" flex justify-between py-4">
        {/* Card-1  */}
          <div className="w-3/12">
            <h1 className=" text-[20px] font-bold">Sunny Hill Festival Address</h1>
            <p>5 College St NW,
              Norcross, GA 30071
              United States</p>
            <p className=" mt-[3rem]">São Conrado, Rio de Janeiro</p>
          </div>

          {/* Card-2  */}
          <div className="w-3/12">
            <h1 className=" text-[20px] font-bold">Useful Links</h1>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Card-3  */}
          <div className="w-3/12">
            <h1 className=" text-[20px] font-bold">Open Hours</h1>
            <div>
              <p>Mon to Fri: 10:00 AM to 8:00 PM</p>
              <p>Sat - Sun: 11:00 AM to 4:00 PM</p>
              <p>Holidays: Closed</p>
            </div>
            <p className=" mt-[3rem]">
              Copyright 2045 ArtXibition Company
              Design:
              <span> Tooplate</span>
            </p>
          </div>
        </div>

        {/* Second Section  */}
        <div>
          <hr className=" border border-black" />
          <div className=" flex justify-between items-center">
            <div className="w-3/12">
              <img src={assets.logo} alt="logo" />
            </div>
            <ul className=" w/3/12 flex space-x-4">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
            <div className=" w-3/12 flex space-x-6">
              <button><FaFacebook className=" text-[2rem]" /></button>
              <button><AiFillTwitterCircle className=" text-[2rem]" /></button>
              <button><RiWhatsappFill className=" text-[2rem]" /></button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
