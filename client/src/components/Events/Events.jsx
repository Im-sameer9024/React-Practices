
import { useContext } from 'react'
import { assets } from '../../assets/assests'
import { StoreContext } from '../../Context-API/StoreContext'

export default function Events() {

  const { addEvent } = useContext(StoreContext)

  
  

  return (
    <div id='event' className=' w-[100vw] mt-[4rem]'>
      <div className=' w-10/12 mx-auto'>
        <h1 className=' text-center text-[3rem] font-bold'>Our Events</h1>
        <div className=' w-full grid grid-cols-3 gap-[3rem] my-[3rem]'>
          {
            assets.events.map((event) => (
              <div key={event.id} className='w-8/12 flex flex-col gap-3 items-center'>
                <div className='w-full'>
                  <img key={event.id} src={event.image} alt="image1" />
                </div>
                <h1 className=' font-bold'>{event.title}</h1>
                <p>{event.description}</p>
                <div className=' flex justify-evenly w-full font-bold'>
                  <h2>{event.date}</h2>
                  <h2>{event.location}</h2>
                </div>
                <div className='space-x-4'>
                  <button onClick={() => addEvent(event.id)} className=' bg-green-400  px-5 py-2 hover:bg-green-700 transition-all duration-200'>join</button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
