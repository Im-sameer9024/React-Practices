import { useState } from "react"
import { assets } from "../../assets/assets"
import axios from "axios"
import { toast } from "react-toastify"
const Add = () => {

  const [image, setImage] = useState(false)
  const url = "http://localhost:3000"

  const [data, setData] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
    price: "",

  })

  const onChangeHandler = (event) => {
    const { name, value } = event.target
    setData(data => ({ ...data, [name]: value }));
  }

  const submitHandler = async (event) => {
    event.preventDefault();
    let formData = new FormData()
    formData.append('title', data.title)
    formData.append('image', image)
    formData.append('description', data.description)
    formData.append('price', Number(data.price))
    formData.append('location', data.location)
    formData.append('date', data.date)

    const response = await axios.post(`${url}/api/v1/add`, formData)

    console.log(response)

    if (response.data.success) {
      setData({
        title: "",
        description: "",
        date: "",
        location: "",
        price: "",
      })
      setImage(false)
      toast.success(response.data.message)
    } else {
      toast.error(response.data.message)
    }
  }


  return (
    <div className=" w-full my-[3rem] mx-[3rem]">
      <form className=" w-8/12 flex flex-col gap-4">
      {/* Image upload  */}
        <div className=" flex flex-col w-2/12">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" />
          </label>
          <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" name="image" hidden required />
        </div>
        <div className=" flex flex-col">
          <p>Title</p>
          <input onChange={(event) => onChangeHandler(event)} value={data.title} required type="text" name="title" id="title" placeholder="Type here" className=" border border-black px-2 py-1" />
        </div>
        <div className=" flex flex-col">
          <p>Event Description</p>
          <textarea onChange={(event) => onChangeHandler(event)} value={data.description} name="description" id="description" rows="6" placeholder="Write here" required className=" border border-black px-2 py-1"></textarea>
        </div>

        {/* Price, location , Price  */}
        <div >
          <div className=" flex justify-between">
            <div className=" flex flex-col">
              <p>Event Price</p>
              <input onChange={(event) => onChangeHandler(event)} value={data.price} type="number" name="price" id="price" required placeholder="$20" className=" border border-black px-2 py-1" />
            </div>
            <div className=" flex flex-col">
              <p>Location</p>
              <input onChange={(event) => onChangeHandler(event)} value={data.location} type="text" name="location" id="location" required placeholder="City" className=" border border-black px-2 py-1" />
            </div>
            <div className=" flex flex-col">
              <p>Event Date</p>
              <input onChange={(event) => onChangeHandler(event)} value={data.date} type="date" name="date" id="date" required className=" border border-black px-2 py-1" />
            </div>
          </div>
        </div>
        <button onClick={(event) => submitHandler(event)} className=" bg-red-500 px-3 py-2 mt-3 text-white font-heading ">ADD</button>
      </form>
    </div>
  )
}

export default Add
