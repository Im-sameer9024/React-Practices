import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Add from './pages/Add-Events/Add';
import List from './pages/List-Events/List';

export default function App() {
  return (
    <div className=' overflow-x-hidden'>
      <Navbar/>
      <hr className=" border border-black" />
      <div className='flex'>
        <Sidebar/>
        <Routes>
        <Route path='/add' element={<Add/>}/>
        <Route path='/list' element={<List/>}/>

        </Routes>
      </div>
    </div>
  )
}
