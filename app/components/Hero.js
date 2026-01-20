import Link from 'next/link'
import React from 'react'
import { IoMdDownload } from "react-icons/io";

const Hero = () => {
  
  return (
    <section id="home" className='mt-21'>
      <div className="relative h-125 bg-[url('img/bg.png')] bg-cover bg-center bg-[#21212e]">
        <div className="absolute inset-0 bg-[#21212e]/30 z-10"></div>
        <div className="relative z-20 h-full">
          <div className="absolute bottom-10 left-12.5 bg-black/20 backdrop-blur-[1px] px-6 py-4 rounded-md w-fit shadow-md">
            <div className="text-white text-3xl drop-shadow-md mb-2">
              ٱلسَّلَامُ عَلَيْكُمْ, I'm <span className="text-[#7451f3] font-bold">Uzaib</span>
            </div>
            <div className="text-white text-base mb-4 drop-shadow-sm leading-relaxed h-20 w-75 overflow-hidden"
              id="animated-text-target">
              Well I am an Artist working to<br></br>
                make world a better place<br></br>
                  <span className="font-semibold">Know more about me below.</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button
                    class="bg-[#793fff] hover:bg-[#6b2fff] text-white px-8 py-3 rounded-lg shadow-lg shadow-[#793fff]/30 transition-all duration-300 transform hover:scale-105 font-medium flex items-center gap-2">
                    <IoMdDownload />Download CV
                  </button>
                  <Link href="#contact"
                    className="border-2 border-[#793fff] text-[#793fff] hover:bg-[#793fff] hover:text-white px-8 py-3 rounded-lg transition-all duration-300 text-center font-medium">
                    Contact
                  </Link>
                </div>
            </div>
          </div>
        </div>
    </section>

  )
}

export default Hero
