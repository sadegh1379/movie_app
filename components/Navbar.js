import { useRouter } from 'next/router';
import {movieTitle} from '../constans';

function Navbar() {
    const route = useRouter()
    const handleClick = (s , l)=>{
        route.push(`/?start=${s}&limit=${l}`)
    }
    return (
        <nav>
            <div
                className='flex  space-x-5 sm:space-x-10 text-xl px-4  overflow-x-scroll whitespace-nowrap scrollbar-hide'
            >
                {movieTitle.map((mov , index)=>{
                    return(
                        <h2 
                        onClick={()=>handleClick(mov.start , mov.limit)}
                          key={index}
                          className='cursor-pointer  hover:scale-150 transition duration-200 active:text-red-500'
                        >{mov.name}</h2>
                    )
                })}
                
            </div>
          
        </nav>
    )
}

export default Navbar
