/* eslint-disable react/prop-types */
import DataContext from "./DataContext";


export default function DataProvider({children}) {
    const obj= {a:"hello"}
  return (
    <>
     <DataContext.Provider value={{obj}} >
        {children}
     </DataContext.Provider> 
    </>
  )
}
