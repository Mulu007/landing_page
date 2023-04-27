import React from 'react'

import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
    FaYoutube,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full mt-24 bg-blue-800 text-gray-300 py-y px-2'>

        <div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-white-500'>
        <p className='py-4  text-white'>2023 Designed by Silvanius Brian IB1</p>
        <div className='flex justify-between sm:w-[300px] pt-4 text-2xl font-bold '>
            <a href='https://www.facebook.com/UwcWaterfordKamhlaba'><FaFacebook/></a>
            <a href='https://www.instagram.com/waterfordkamhlabauwcsa/?hl=en'><FaInstagram /></a>
            <a href='https://twitter.com/WaterfordUWCSA'><FaTwitter /></a>
            <a href='https://www.linkedin.com/school/waterford-kamhlaba-uwcsa/'><FaLinkedin /></a>
            <a href='https://www.youtube.com/user/wkalumni'><FaYoutube /></a>
        </div>
        </div>
    </div>
  )
}

export default Footer