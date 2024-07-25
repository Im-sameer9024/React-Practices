
import { assets } from '../../assets/assests'


export default function Header() {

  function moverDown(id){
    const element = document.querySelector(id);
    if(element){
      element.scrollIntoView({behavior:"smooth"})
    }
  }

  return (
    <div className=' w-[100vw] bg-cover bg-center h-screen flex justify-center items-center ' style={{ backgroundImage: `url(${assets.header})` }}>

      <div className=' flex flex-col justify-center items-center'>
        <h1 className=' font-bold text-white text-[40px]'>The Sunny Hill Festivals</h1>
        <button onClick={() => moverDown("#about")} className=' bg-white mt-4 px-4 py-2 font-bold hover:bg-slate-300 transition-all duration-200'>About Us</button>
      </div>

    </div>
  )
}
