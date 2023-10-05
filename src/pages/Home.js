import React from 'react';
import heropic from '../images/Rectangle 1.svg';

const Home = () => {
  return (
    <div className="bg-gradient-to-t from-[#fcefdf]">
      <section id="home" >
        <div className="container mx-auto px-4 pt-5 flex flex-col">
          {/* <div className="flex flex-wrap justify-center items-center gap-4 my-4"> */}
          <div className="flex flex-col-reverse md:flex-row lg:justify-center">
            <div className="space-y-8 md:w-2/3 lg:w-1/3">
              <h1 className="judson mt-10"><b>Welcome to [Name] Where Compassion Meets Care</b></h1>
              <div className="text-[#626262]">
                <p>Our team of expirienced and highly-trained caregivers is committed to ensuring the physical, emotional, and social well being of each individual under our care.</p>
                <p>We offer a range of personalized services tailored to meet the unique needs of our clients.</p>
              </div>
              <div className="text-center">
                <button className="px-4 py-2 text-white bg-[#293241] rounded-lg">Book Appointment</button>
              </div>
            </div>
            <div className="lg:w-2/5 md:pt-20">
              <img width={610} height={495} src={heropic} alt="Homeimage" />
            </div>
          </div>
          <div className="bg-[#293241] text-white flex flex-row flex-wrap justify-around gap-2 md:py-8 md:pr-20 pl-4 rounded-md mx-auto mt-20 sm:gap-8 lg:gap-6 ">
            {/* <div className="flex items-center gap-2 lg:flex-row sm:flex-col "> */}
            <div className="flex items-center gap-2 flex-col lg:flex-row">
              <h1 className="text-[#f0a202] font-semibold">25+</h1>
              {/* <div className="text-xl font-medium sm:font-normal text-center lg:text-start"> */}
              <div className="text-xl font-bold text-center lg:text-start">
                <p>Years</p>
                <p>Expirienced</p>
              </div>
            </div>
            <div className="flex items-center gap-2 flex-col lg:flex-row">
              <h1 className="text-[#72EB86] font-semibold">750+</h1>
              <div className="text-xl font-medium sm:font-normal text-center lg:text-start">
                <p>Great</p>
                <p>Volunteers</p>
              </div>
            </div>
            <div className="flex items-center gap-2 flex-col lg:flex-row">
              <h1 className="text-[#f0a202] font-semibold">20K+</h1>
              <div className="text-xl font-medium sm:font-normal text-center lg:text-start">
                <p>Satisfied</p>
                <p>Customers</p>
              </div>
            </div>
            <div className="flex items-center gap-2 flex-col lg:flex-row">
              <h1 className="text-[#6D7CFF] font-semibold">10+</h1>
              <div className="text-xl font-medium sm:font-normal text-center lg:text-start">
                <p>Awards</p>
                <p>Achieved</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
