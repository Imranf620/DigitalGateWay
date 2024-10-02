import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);

  return (
    <div className="bg-white">
      {/* Navbar */}
      <nav className="mx-auto w-[90vw] py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold ">Digital Gateway Services</div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            <a href="/" className="text-[18px] text-[#000] hover:text-[#002366]">Home</a>
            <div
              className="relative"
              onMouseEnter={() => setIsServicesHovered(true)}
              onMouseLeave={() => setIsServicesHovered(false)}
            >
              <a href="/services" className="text-[18px] text-[#000] hover:text-[#002366]">Services</a>
              {isServicesHovered && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <a href="/services/service1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Service 1</a>
                    <a href="/services/service2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Service 2</a>
                    <a href="/services/service3" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Service 3</a>
                  </div>
                </div>
              )}
            </div>
            <a href="/pricing" className="text-[18px] text-[#000] hover:text-[#002366]">Pricing</a>
            <a href="/about" className="text-[18px] text-[#000] hover:text-[#002366]">About Us</a>
            <a href="/contact" className="text-[18px] text-[#000] hover:text-[#002366]">Contact</a>
            <a href="/signup" className="text-[18px] text-[#000] hover:text-[#002366]">Sign Up</a>
            <button className="btnPrimary  text-white px-4 py-2 rounded ">Get Started</button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[18px] text-[#000] hover:text-[#002366]">
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                ) : (
                  <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {/* {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            <a href="/" className="block text-gray-800 hover:text-blue-600">Home</a>
            <div>
              <a href="/services" className="block text-gray-800 hover:text-blue-600">Services</a>
              <div className="pl-4 mt-2 space-y-2">
                <a href="/services/service1" className="block text-sm text-gray-700 hover:text-blue-600">Service 1</a>
                <a href="/services/service2" className="block text-sm text-gray-700 hover:text-blue-600">Service 2</a>
                <a href="/services/service3" className="block text-sm text-gray-700 hover:text-blue-600">Service 3</a>
              </div>
            </div>
            <a href="/pricing" className="block text-gray-800 hover:text-blue-600">Pricing</a>
            <a href="/about" className="block text-gray-800 hover:text-blue-600">About Us</a>
            <a href="/contact" className="block text-gray-800 hover:text-blue-600">Contact</a>
            <a href="/signup" className="block text-gray-800 hover:text-blue-600">Sign Up</a>
            <button className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Get Started</button>
          </div>
        )} */}
        {isMenuOpen && (
  <div
    className="md:hidden mt-4 space-y-2 absolute top-[35px] left-[1px] w-full  bg-white z-10"
    style={{ zIndex: 1000 }}
  >

    <div className='flex flex-col p-6 gap-2'>
    <a href="/" className="block text-gray-800 hover:text-blue-600">Home</a>
    <div
              className="relative"
              onMouseEnter={() => setIsServicesHovered(true)}
              onMouseLeave={() => setIsServicesHovered(false)}
            >
              <a href="/services" className="text-[18px] text-[#000] hover:text-[#002366]">Services</a>
              {isServicesHovered && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <a href="/services/service1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Service 1</a>
                    <a href="/services/service2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Service 2</a>
                    <a href="/services/service3" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Service 3</a>
                  </div>
                </div>
              )}
            </div>
    <a href="/pricing" className="block text-gray-800 hover:text-blue-600">Pricing</a>
    <a href="/about" className="block text-gray-800 hover:text-blue-600">About Us</a>
    <a href="/contact" className="block text-gray-800 hover:text-blue-600">Contact</a>
    <a href="/signup" className="block text-gray-800 hover:text-blue-600">Sign Up</a>
    <button className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Get Started</button>
    </div>

  </div>
        )}
      </nav>
    </div>
  );
};

export default Header;