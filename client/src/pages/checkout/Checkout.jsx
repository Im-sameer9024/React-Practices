import { useContext } from "react";
import { StoreContext } from "../../Context-API/StoreContext";
import { IoCloseCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function Checkout() {

  const {events,select,getTotalCartAmount,removeEvent} = useContext(StoreContext)

  const navigate = useNavigate()


  return (
    <div className=" w-full mt-[6rem]">
      <div className="w-10/12 mx-auto">
        <div className="grid grid-cols-6">
          <p>Events</p>
          <p>Title</p>
          <p>Description</p>
          <p>Date</p>
          <p>Location</p>
          <p>Price</p>
        </div>
        <br />
        <hr className="border-black mb-2 " />
        {
          events.map((event,index)=>{
            if(select[event.id] > 0){
              return (
              <div key={index}>
              <div className="bg-slate-300 w-[30px] rounded-full flex justify-center items-center font-bold h-[30px]">
                <button onClick={()=>removeEvent(event.id)}>
                  <IoCloseCircle className="text-[25px]"/>
                </button>
              </div>
                <div className="grid grid-cols-6 items-center font-content">
                  <div className=" w-[100px] h-[100px]">
                  <img src={event.image} alt="event" />
                  </div>
                  <p className=" text-[2rem] font-bold">{event.title}</p>
                  <p>${event.description}</p>
                  <p>{event.date}</p>
                  <p>{event.location}</p>
                  <p>${event.Price}</p>

                </div>
                <hr className=" my-2 border-black" />
              </div>
            );
            }
          })
        }
        {/* cart Total  */}
      <div className=" mt-5">
      <h1 className=" font-heading text-[2rem]">Cart Total</h1>
        <div className=" flex justify-between">
          <div className="w-4/12">
            <div className=" flex justify-between pr-5">
              <p className=" font-heading text-[1.2rem]">Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr className=" my-2 border-black"/>
            <div className=" flex justify-between pr-5">
              <p className=" font-heading text-[1.2rem]">Tax Fee</p>
              <p>${getTotalCartAmount() === 0? 0:2}</p>
            </div>
            <hr className=" my-2 border-black"/>
            <div className=" flex justify-between pr-5">
              <b className=" font-heading text-[1.2rem]">Total</b>
              <b>${getTotalCartAmount()=== 0 ? 0 : getTotalCartAmount()+2}</b>
            </div>
            <button onClick={()=>navigate("/signup")} className=" bg-red-500 px-3 py-2 mt-3 text-white font-heading ">Proces to Checkout</button>
          </div>
        </div>
      </div>

      </div>

    </div>
  )
}
