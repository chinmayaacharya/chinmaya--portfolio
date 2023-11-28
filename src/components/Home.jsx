import React from 'react'
import HeroImage from '../assets/heroImage.jpg'
import { HiArrowRight } from "react-icons/hi2";
import { FaFileDownload } from "react-icons/fa";
import {Link} from "react-scroll";
import resume from "../assets/RESUME (2).pdf"

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black to-gray-800">
     <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
            <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                I'm a Front-end Developer 
            </h2>
            <p className='text-gray-500 py-4 max-w-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores unde voluptate nostrum, amet quod accusantium iste magnam similique in odit nulla ea voluptates mollitia id illo, labore quasi recusandae modi.</p>
            <div className='flex '>
                <Link to="portfolio" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2  flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                    Portfolio  
                    <span className='group-hover:rotate-90 duration-300' ><HiArrowRight className='ml-1' /></span>
                    
                </Link>
           
            <div>
            <a
  href={resume}
  download
  className='text-white w-fit px-6 py-3 my-2 ml-5 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'
>
  Resume <span className='ml-1'><FaFileDownload /></span>
</a>

            </div>
            </div>
        </div>
        <div>
            <img src={HeroImage} alt="my profile" className='rounded-2xl mx-auto w-2/3 md:max-w-full' />
        </div>
     </div>
    </div>
  )
}

export default Home
