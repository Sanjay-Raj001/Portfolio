import React from 'react';
import AboutPicture from '../assets/AboutPicture.png'

function About() {
  return (
    <div className='text-white max-w-[1200px] mx-auto my-12 pt-24' id='about'>
      <div className="md:grid md:grid-cols-2 md:gap-8 sm:py-16">
        {/* Text Section */}
        <div className="flex flex-col justify-center md:order-1">
          <div className="text-left mx-6">
            <h2 className="text-3xl font-semibold mb-4 primary-color">About Me</h2>
            <p className='text-base lg:text-lg'>
              Hello! I’m Sanjay Raj, a dedicated software developer and tester. I have a background in Computer Applications, having completed my BCA from MG University.
              <br /><br />
              As a continuous learner and enthusiastic self-starter, I’m passionate about expanding my skills in software development and testing. I actively seek opportunities to enhance my knowledge and stay updated with the latest technologies and industry trends.
              <br /><br />
              Currently, I’m focused on developing my expertise in various programming languages and tools.
              <br /><br />
              Feel free to contact me if you’d like to connect or learn more about my work and interests!
            </p>
          </div>
        </div>
        {/* Image Section */}
        <div className="flex items-center justify-center md:order-2">
          <img 
            className='rounded-lg' 
            src={AboutPicture}
            alt="Sanjay Raj" 
            width={300} 
            height={300} 
          />
        </div>
      </div>
    </div>
  );
}

export default About;
