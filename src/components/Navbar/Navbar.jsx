import React, { useState } from "react";
import "../Navbar/Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex justify-center">
      {/* Mobile Menu Container */}
      <div className="md:hidden absolute top-0 right-0 mt-4 mr-5">
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="bg-white text-orange-500 p-2  rounded-md shadow-md"

        >
          {isMenuOpen ? (
          
            <svg
              
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              width="25px"
              height="25px"
            >
              {" "}
              <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z" />
            </svg>
           
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="25px"
              height="25px"
            >
              <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z" />
            </svg>
          )}
        </button>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="bg-black border border-white rounded-md shadow-md   mr-5">
            <ul className="text-white text-lg">
              <li className="py-2 px-4 border-white border-b hover:bg-orange-500 hover:transition-colors hover:duration-300 cursor-pointer">
                Home
              </li>
              <li className="py-2 px-4 border-white border-b hover:bg-orange-500 hover:transition-colors hover:duration-300 cursor-pointer">
                About Me
              </li>
              <li className="py-2 px-4 border-white border-b hover:bg-orange-500 hover:transition-colors hover:duration-300 cursor-pointer">
                Portfolio
              </li>
              <li className="py-2 px-4 border-white hover:bg-orange-500 hover:transition-colors hover:duration-300 cursor-pointer">
                Services
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Desktop Navbar */}
      <nav className="hidden md:inline-block border-white border-2 mt-3 rounded-xl text-center backdrop-blur-sm">
        <ul className="text-white text-lg flex flex-row gap-7 justify-center">
          <li className="hover:bg-orange-500 hover:rounded-l-xl hover:transition-colors hover:duration-300 h-7 w-17 px-3 cursor-pointer">
            Home
          </li>
          <li className="hover:bg-orange-500 hover:transition-colors hover:duration-300 h-7 w-17 px-3 cursor-pointer">
          About Me

          </li>
          <li className="hover:bg-orange-500 hover:transition-colors hover:duration-300 h-7 w-17 px-2 cursor-pointer">
          Portfolio
          </li>
          <li className="hover:bg-orange-500 hover:rounded-r-xl hover:transition-colors hover:duration-300 h-7 w-17 px-3 cursor-pointer">
          Services
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
