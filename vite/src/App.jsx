import { useContext } from "react"
// import Hamburger from "./practics/Hamburger"
// import Pegination from "./practics/Pegination"
// import Search from "./practics/Search"
// import Todo from "./practics/Todo"

import DataContext from "./Context/DataContext"

const App = () => {

  const data = useContext(DataContext)
  console.log(dat)

  return (
    <div>
      {/* <Search/> */}
      {/* <Todo/> */}
      {/* <Pegination/> */}
      {/* <Hamburger/> */}
    </div>
  )
}

export default App
