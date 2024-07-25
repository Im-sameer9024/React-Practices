
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import{events} from '../assets/assests'

export const StoreContext = createContext(null)



const StoreContextProvider = ({ children }) => {
  const[select,setSelect] = useState([])



  const addEvent = (id) => {
    setSelect((prev) => ({...prev,[id]:id}))
  }

  const removeEvent = (id) =>{
    setSelect((prev) => ({...prev, [id]:null}))
  }

  const getTotalCartAmount =() =>{
    let totalAmout = 0;
    for(let item in select){
           if(select[item]>0){
          let eventInfo = events.find((event)=> event.id === item)
          totalAmout += eventInfo.Price
           }
    }
    return totalAmout;
  }


  const contextValues ={
    select,setSelect,addEvent,events,getTotalCartAmount,removeEvent,
  }

  return (
    <StoreContext.Provider value={contextValues}>
      {children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider;

