import logo from '../../assets/logo.png'
import admin from '../../assets/admin.webp'
export default function Navbar() {
  return (
    <div className=' w-[100vw]'>
      <div className=' flex w-10/12 mx-auto justify-between items-center'>
        <img src={logo} alt="logo" className='w-30 h-20'  />
        <div>
        <img src={admin} alt="admin" className=' w-[50px] h-[50px] rounded-full object-cover scale-150 box-border ' />
        </div>
      </div>
     
    </div>
  )
}
