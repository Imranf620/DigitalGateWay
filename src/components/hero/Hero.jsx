import React from 'react';

function Hero() {
  return (
    <div className=''>
      {/* Hero Section */}
      <video autoPlay loop muted playsInline>
        <source src="images\3254066-uhd_3840_2160_25fps.mp4" type="video/mp4"  />
      </video>
      <div className=" w-[90vw] my-[150px] mx-auto flex flex-col gap-10 items-center justify-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold sm:font-extrabold text-primary ">
          Revolutionize Your Business with Digital Gateway Services
        </h1>
        <p className="text-2xl md:text-2xl font-semibold text-secondary ">
          Comprehensive Digital Solutions for Marketing, Lead Management, and Communication
        </p>
        <button className="btnPrimary text-white text-lg font-semibold px-8 py-3 rounded-lg  transition duration-300">
          Get Started Now
        </button>
      </div>
    </div>
  );
}

export default Hero;