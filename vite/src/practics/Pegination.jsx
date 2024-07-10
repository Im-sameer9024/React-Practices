import { useState } from "react";


const Pegination = () => {
   
    const[currentPage,setCurrentPage] = useState(1)
    
    const totalItem = ["1","2","3","4","5","6","7","8","9"]
    const perPageItem = 2;

    function itemsPerPage(){
        const staringIndex = (currentPage-1) * perPageItem;
        const endingIndex = staringIndex + perPageItem;
        return totalItem.slice(staringIndex,endingIndex)
    }

    function pageButtons(){
        let totalPages = []
        let pageNumbers = Math.ceil(totalItem.length/perPageItem) 
    
        for(let i=1;i<= pageNumbers;i++){
           totalPages.push(i)
        }
        return totalPages
    }
    


  return (
    <div>
      <div>
        {itemsPerPage().map((item,index)=>(
            <li key={index}>{item}</li>
        ))}
      </div>
      <div>
      {
        pageButtons().map((page)=>(
            <button key={page} onClick={()=>setCurrentPage(page)}>{page}</button>
        ))

      }
      </div>
    </div>
  )
}

export default Pegination
