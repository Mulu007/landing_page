import React from 'react'
import { useState } from 'react'
import { Data } from './Data'

const Hero = () => {
    const [images] = useState(Data)
  return (
    <div className="flex min-h-screen items-center justify-center ">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 ">
        {images.map((item) => (
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shaodw-black/30  ">
            <div key={item.id} 
            // className="h-96 w-72 "
            className='rounded-full h-96 w-72 '
            >
              <img
                className=" object-cover transition-transform duration-500 "
                // className=''
                // className="w-11 h-11 shrink-0 grow-0 rounded-full bg-green-300 text-green-700"
                src={item.image}
                alt={item.name}
              />
            </div>
            <div className="absolute inset-4 bg-gradient-to-br group-hover:from-blue-600/60 group-hover:to-blue-800/90 "></div> 
             <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <div className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="font-dmserif font-bold text-white">
                  {item.name}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Hero
