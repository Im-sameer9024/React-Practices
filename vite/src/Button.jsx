import { useRef } from "react"


const Button = () => {

  const count = useRef(0)

const inc = () => {
 count.current +=1
}

  return (
    <div>
      <div >{count.current}</div>
      <button className=" bg-red-900 px-3" onClick={inc}>++</button>
    </div>
  )
}

export default Button
