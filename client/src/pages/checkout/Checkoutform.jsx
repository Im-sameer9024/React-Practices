

export default function Checkoutform() {
  return (
    <div className="w-full mt-[4rem]">
      <div className="w-5/12 mx-auto gap-2 flex flex-col">
          <p className=" font-heading text-[30px]">User Information</p>

          <div className=" flex justify-between gap-2 " >
            <input type="text" placeholder="First Name"  required className="border border-black p-1 w-full outline-none" />
            <input type="text" placeholder="Last Name" required className="border border-black  w-full p-1 outline-none " />
          </div>

          <div className="flex flex-col gap-2 ">
            <input type="email" placeholder="Email" name="" id="" required className="border border-black p-1 outline-none" />
          </div>

          <div className=" flex justify-between gap-2 ">
            <input type="text" placeholder="City" name="" id="" required className="border border-black w-full p-1 outline-none" />
            <input type="text" placeholder="State" name="" id="" required className="border border-black w-full p-1 outline-none " />
          </div>

          <div className=" flex justify-between gap-2 ">
            <input type="number" placeholder="Zip Code" name="" id="" required className=" w-full border border-black p-1 outline-none " />
            <input type="text" placeholder="Country" name="" id="" required className="border border-black w-full p-1 outline-none" />
          </div>

          <input type="text" placeholder="Phone" required className="border border-black w-full p-1 outline-none" />
          <div className=" flex justify-center items-center">
          <button className=" bg-red-500 px-3 py-2 mt-3 text-white font-heading ">
                  Submit
                </button>
          </div>
      </div>
    </div>
  )
}
