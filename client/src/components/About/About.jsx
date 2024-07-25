
import LocationOnIcon from '@mui/icons-material/LocationOn';
export default function About() {
  return (
    <div id='about' className=' w-[100vw] h-auto mt-[4rem]'>

      <div className='w-10/12 mx-auto flex justify-between'>
        {/* Left Side  */}
        <div className=' w-8/12'>
          <h1 className=' font-bold text-[40px]'>There Amazing Venues for events</h1>
          <p>ArtXibition Event Template is brought to you by Tooplate website and it included total 7 HTML pages. These are Homepage, About, Rent a venue, shows & events, event details, tickets, and ticket details. You can feel free to modify any page as you like. If you have any question, please visit our Contact page.
          <br/>
          <br/>
            You can use this event template for your commercial or business website. Pellentesque et neque et sapien pulvinar condimentum vitae non ipsum. Duis mauris dui, aliquet.. Duis tempor nec turpis et imperdiet. Maecenas congue elementum felis, id interdum erat mattis nec. Sed non bibendum ante. Sed efficitur.</p>
        </div>

        {/* Right Side  */}
        <div className=' flex flex-col justify-start items-center' >
          <h1 className=' font-bold text-[40px]'> <span><LocationOnIcon style={{fontSize:40}}/>Visit Us</span></h1>
          <p>
          5 College St NW, <br/>
          Norcross, GA 30071 <br/>
          United States
          </p>
        </div>
      </div>


    </div>
  )
}
