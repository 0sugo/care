import React from 'react'
import servicepic1 from '../images/Rectangle 7.svg';
import servicepic2 from '../images/Rectangle 7 (1).svg';
import servicepic3 from '../images/Rectangle 7 (2).svg';

const Services = () => {
  return (
    <div className="bg-gradient-to-t from-[#f0efef]">
      <section id="services">
        <div className="container mx-auto p-4">
          <div className="text-center my-4">
            <h1 className="text-[#f0a202] mb-5"><b>Services</b></h1>
            <h3><b>Everyone Deserves Our Services</b></h3>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-6 mt-10 mb-32">
            <div className="bg-white rounded-lg md:w-2/5 lg:w-1/4">
              <div>
                <img className="w-full" src={servicepic1} alt="service1" />
              </div>
              <div className="p-4">
                <h4 className="text-center"><b>Assisted Living</b></h4>
                <p>Assisted living offers seniours a supportive, community-based residential setting,providing help with daily activities while promoting independence and social engagement.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg md:w-2/5 lg:w-1/4">
              <div>
                <img className="w-full" src={servicepic2} alt="service2" />
              </div>
              <div className="p-4">
                <h4 className="text-center"><b>Personal Care</b></h4>
                <p>Assisted living offers seniours a supportive, community-based residential setting,providing help with daily activities while promoting independence and social engagement.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg md:w-2/4 lg:w-1/4">
              <div>
                <img className="w-full" src={servicepic3} alt="service3" />
              </div>
              <div className="p-4">
                <h4 className="text-center"><b>Nursing Care</b></h4>
                <p>Assisted living offers seniours a supportive, community-based residential setting,providing help with daily activities while promoting independence and social engagement.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
