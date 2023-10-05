import React from 'react'
import { FaPhone,FaLocationDot,FaInstagram,FaFacebookF,FaTwitter,FaLinkedin } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-[#293241] text-white">
      <section>
        <div className="container mx-auto p-4">
          <div className="flex flex-wrap justify-center  gap-4 py-8">
            <div className="space-y-3 p-4 w-full md:w-1/3 lg:w-1/3">
              <h1><b>Companies name</b></h1>
              <h5>Providing Compassionate Care, One Heart at a time</h5>
              <div className="flex gap-4">
                <span className="bg-white text-[#f0a202] rounded-full p-2"><FaInstagram/></span>
                <span className="bg-white text-[#f0a202] rounded-full p-2"><FaFacebookF/></span>
                <span className="bg-white text-[#f0a202] rounded-full p-2"><FaTwitter/></span>
                <span className="bg-white text-[#f0a202] rounded-full p-2"><FaLinkedin/></span>
              </div>
            </div>
            <div className="p-4 space-y-2 lg:text-center w-full md:w-1/4 lg:w-1/5">
              <h3><b>Quick Links</b></h3>
              <h6><a href="#/">Home</a></h6>
              <h6><a href="#about">About Us</a></h6>
              <h6><a href="#contact">Contact Us</a></h6>
            </div>
            <div className="p-4 space-y-2 w-full md:w-1/3 lg:w-1/5">
              <h3><b>Contact</b></h3>
              <div className="flex items-center gap-2">
                <span className="text-[#f0a202]"><FaPhone/></span>
                <span>(+254) 123 456 789</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#f0a202]"><FaLocationDot/></span>
                <span>Nairobi, Kenya</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#f0a202]"><IoMdMail/></span>
                <span>support@gmail.com</span>
              </div>
            </div>
          </div>
          <hr />
          <div className="text-right p-4">
            <p>Copyright &copy; 2023 - All rights reserved</p>
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer
