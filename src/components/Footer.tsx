import React from 'react'
import { Linkedin, Twitter } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="py-8 relative z-10">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="text-center md:text-left">
            <p className="text-white text-lg font-semibold">
              See How Easy<br />Artificial Intelligence Can Be
            </p>
            <p className="text-gray-400">Start training your models today.</p>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="./login.html"
              className="et_pb_button et_pb_button_2_tb_header et_pb_bg_layout_light"
              style={{
                borderRadius: '15px',
                borderColor: '#B7B8B8',
                borderWidth: '0.1px',
                borderStyle: 'solid',
                background: 'linear-gradient(to right, #24243e, #302b63, #0f0c29)',
                animationDelay: '1.4s',
                color: '#fff',
                padding: '.3em 1em'
              }}
            >
              Try Now
            </a>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © 2023 DataPowered AI. All Rights Reserved.
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://www.linkedin.com/company/datapoweredai/" target="_blank" rel="noopener noreferrer">
              <Linkedin size={24} color="#ADB4BE" />
            </a>
            <a href="https://twitter.com/datapoweredai" target="_blank" rel="noopener noreferrer">
              <Twitter size={24} color="#ADB4BE" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer