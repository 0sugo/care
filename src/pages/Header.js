import React from 'react'
import { IoMdMail } from "react-icons/io";
import { FaPhone,FaInstagram,FaFacebookF,FaTwitter } from "react-icons/fa6";

const Header = () => {
  return (
    <header >
      <div className="container mx-auto p-4">
        <div className="flex justify-between p-4 border-b border-slate-300 lg:mx-40">
          <div className="flex gap-4">
            <div className="flex items-center gap-2"> 
              <span className="text-[#f0a202]"><FaPhone/></span>
              <p>(+254) 123 456 789</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#f0a202]"><IoMdMail/></span>
              <p>support@dormain.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <p>Follow Us:</p>
            <a href="/#" className="text-[#f0a202]"><FaInstagram/></a>
            <a href="/#" className="text-[#f0a202]"><FaFacebookF/></a>
            <a href="/#" className="text-[#f0a202]"><FaTwitter/></a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
