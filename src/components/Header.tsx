// src/components/Header.tsx
import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-lg">
      <div className="container flex items-center justify-between p-4">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src="./img/dpai_F7F8F8_outline.webp"
            alt="DataPowered AI Logo"
            className="max-w-[200px] md:max-w-[300px] filter drop-shadow-lg"
          />
        </a>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="./platform/index.html" className="text-white hover:underline text-lg">Product</a>
          <a href="./pricing/index.html" className="text-white hover:underline text-lg">Pricing</a>
          <a href="./industries/index.html" className="text-white hover:underline text-lg">Industries</a>
          <a href="./resources/index.html" className="text-white hover:underline text-lg">Resources</a>
          <a href="./about-us/index.html" className="text-white hover:underline text-lg">About</a>
        </nav>
        {/* Right-side buttons and mobile menu */}
        <div className="flex items-center">
          {/* Mobile buttons - bigger and to the left of hamburger */}
          <div className="md:hidden flex space-x-2 mr-4">
            <a
              href="./login.html"
              className="px-4 py-2 rounded-full border border-gray-300 text-white text-sm whitespace-nowrap"
              style={{ background: 'linear-gradient(to right, #24243e, #302b63, #0f0c29)' }}
            >
              Login
            </a>
            <a
              href="./login.html"
              className="px-4 py-2 rounded-full border border-gray-300 text-white text-sm whitespace-nowrap"
              style={{ background: 'linear-gradient(to right, #24243e, #302b63, #0f0c29)' }}
            >
              Try Now
            </a>
          </div>
          
          {/* Desktop buttons */}
          <div className="hidden md:flex space-x-4">
            <a
              href="./login.html"
              className="px-5 py-2 rounded-full border border-gray-300 text-white text-lg whitespace-nowrap"
              style={{ background: 'linear-gradient(to right, #24243e, #302b63, #0f0c29)' }}
            >
              Login
            </a>
            <a
              href="./login.html"
              className="px-5 py-2 rounded-full border border-gray-300 text-white text-lg whitespace-nowrap"
              style={{ background: 'linear-gradient(to right, #24243e, #302b63, #0f0c29)' }}
            >
              Try Now
            </a>
          </div>
          
          {/* Mobile menu button - more prominent */}
          <button className="md:hidden bg-gray-800 rounded-full p-2" onClick={toggleMenu}>
            {isMenuOpen ? <X size={28} color="#fff" /> : <Menu size={28} color="#fff" />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 backdrop-blur-lg">
          <nav className="flex flex-col p-6">
            <a href="./platform/index.html" className="text-white py-3 text-xl font-medium hover:underline">Product</a>
            <a href="./pricing/index.html" className="text-white py-3 text-xl font-medium hover:underline">Pricing</a>
            <a href="./industries/index.html" className="text-white py-3 text-xl font-medium hover:underline">Industries</a>
            <a href="./resources/index.html" className="text-white py-3 text-xl font-medium hover:underline">Resources</a>
            <a href="./about-us/index.html" className="text-white py-3 text-xl font-medium hover:underline">About</a>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header