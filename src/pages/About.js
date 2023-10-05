import React, { useState } from 'react';
import aboutpic from '../images/Rectangle 3.svg';

const About = () => {
  const [activeSection, setActiveSection] = useState('approach');

  const handleApproachClick = () => {
    setActiveSection('approach');
  };

  const handleMissionClick = () => {
    setActiveSection('mission');
  };

  const handleTargetClick = () => {
    setActiveSection('target');
  };

   const ApproachSection = () => (
    <div className="p-4 leading-7 text-justify text-[#626262]">
      <p>
        At [Your Caregiver Service Name], we approach caregiving with a deeply personalized touch, striving to understand each individual's unique needs, preferences,
        and life story, because we believe that the most meaningful care is one that honors the individuality and dignity of every senior we serve.
      </p>
    </div>
  );

  const MissionSection = () => (
    <div className="p-4 leading-7 text-justify text-[#626262]">
      <p>(Mission)Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis velit quia esse quisquam minus commodi.
         Tempora, recusandae, enim sint nesciunt reprehenderit nobis voluptates corrupti,
         sit quaerat doloremque debitis rem aut!</p>
    </div>
  );

  const TargetSection = () => (
    <div className="p-4 leading-7 text-justify text-[#626262]">
      <p>(Target)Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis velit quia esse quisquam minus commodi.
         Tempora, recusandae, enim sint nesciunt reprehenderit nobis voluptates corrupti,
         sit quaerat doloremque debitis rem aut!</p>
    </div>
  );
  return (
    <div>
      <section id="about">
        <div className="container mx-auto lg:p-4 md:p-10">
          <div className="lg:flex-row flex-wrap justify-center lg:gap-8 lg:my-20 md:flex sm:flex-col-reverse">
            <div className="pt-16 md:pt-2 flex justify-center p-4">
              <img width={528} height={500} src={aboutpic} alt="about" />
            </div>
            <div className="lg:w-2/5">
              <div className="text-center p-4 space-y-5">
                <h1 className="text-[#f0a202]"><b>About Us</b></h1>
              </div>
              <div className="mx-auto lg:w-96 mb-4 text-center p-4">
                <h4><b>Meet the Heart and soul of [Your Caregiver Service Name]</b></h4>
              </div>
              {/* <div className="flex lg:justify-between md:justify-evenly sm:justify-between p-4"> */}
              <div className="flex justify-between p-4 md:justify-around">
                <h5
                  className={`cursor-pointer text-[#626262] ${activeSection === 'approach' ? 'text-[#f0a202] underline' : ''}`}
                  onClick={handleApproachClick}
                ><b>Approach</b></h5>
                <h5
                  className={`cursor-pointer text-[#626262] ${activeSection === 'mission' ? 'text-[#f0a202] underline' : ''}`}
                  onClick={handleMissionClick}
                ><b>Mission</b></h5>
                <h5
                  className={`cursor-pointer text-[#626262] ${activeSection === 'target' ? 'text-[#f0a202] underline' : ''}`}
                  onClick={handleTargetClick}
                ><b>Target</b></h5>
              </div>
              {activeSection === 'approach' && <ApproachSection />}
              {activeSection === 'mission' && <MissionSection />}
              {activeSection === 'target' && <TargetSection />}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default About
