import { useEffect, useState } from "react"
import axios from 'axios'
import { toast } from 'react-toastify'


export default function List() {

  const [list, setList] = useState([])

  const url = 'http://localhost:3000'

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/v1/list`)
    if (response.data.success) {
      setList(response.data.data)
    } else {
      toast.error(response.data.message)
    }
  }

  // const removeFood = async (foodId) => {
  //   const response = await axios.post(`${url}/api/v1/remove`, { id:foodId })
  //   await fetchList()
  //   if(response.data.success) {
  //     toast.success(response.data.message)
  //   }else{
  //     toast.error(response.data.message)
  //   }
    
  // }


  useEffect(() => {
    fetchList()
  }, [])

  return (
    <div className=" w-full mt-[3rem]">
      <div className="w-10/12 mx-auto">
      <p>All Food List</p>
      <div>
        <div className=" grid grid-cols-6 border border-black px-3 py-1 bg-slate-200">
          <b>Image</b>
          <b>Title</b>
          <b>Description</b>
          <b>Date</b>
          <b>Location</b>
          <b>Price</b>
        </div>
        {
          list.map((item, index) => {
            return (
              <div key={index} className=" grid grid-cols-6 border border-black px-3 py-1">
                   <img src={`${url}/images/`+item.image} alt="" width="48" />
                   <p>{item.title}</p>
                   <p>{item.description}</p>
                   <p>${item.date}</p>
                   <p>${item.location}</p>
                   <p>${item.price}</p>
              </div>
            )
          })
        }
      </div>
      </div>
    </div>
  )
}
