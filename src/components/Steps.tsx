// src/components/Steps.tsx
import React from 'react'

const Steps: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Step-by-Step</h2>
        
        {/* Upload Documents */}
        <div id="upload" className="mb-12">
          {/* Mobile version (image then text) */}
          <div className="block md:hidden">
            <div className="w-full mb-6">
              <img
                src="https://github.com/seanhlewis/seanhlewis/assets/96705270/c0492b1e-6313-477e-87a0-71905dd94a53"
                alt="Upload Documents"
                className="rounded-2xl w-full object-cover"
              />
            </div>
            <div className="w-full">
              <h3 className="text-2xl md:text-3xl font-bold text-white">Upload Documents</h3>
              <ul className="list-disc list-inside text-gray-300 mt-4 text-base md:text-lg">
                <li>Drag and drop documents directly into DataPowered AI.</li>
                <li>Supports over 20+ different popular formats.</li>
                <li>CSV, PDF, PPTX, TXT, etc.</li>
              </ul>
            </div>
          </div>
          
          {/* Desktop version (side by side) */}
          <div className="hidden md:flex md:flex-row md:gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl md:text-3xl font-bold text-white">Upload Documents</h3>
              <ul className="list-disc list-inside text-gray-300 mt-4 text-base md:text-lg">
                <li>Drag and drop documents directly into DataPowered AI.</li>
                <li>Supports over 20+ different popular formats.</li>
                <li>CSV, PDF, PPTX, TXT, etc.</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://github.com/seanhlewis/seanhlewis/assets/96705270/c0492b1e-6313-477e-87a0-71905dd94a53"
                alt="Upload Documents"
                className="rounded-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Train Your Model */}
        <div id="label" className="mb-12">
          {/* Mobile version (image then text) */}
          <div className="block md:hidden">
            <div className="w-full mb-6">
              <img
                src="https://github.com/seanhlewis/seanhlewis/assets/96705270/c9a467d9-aeb9-403d-bd19-87a52e37cdb2"
                alt="Train Your Model"
                className="rounded-2xl w-full object-cover"
              />
            </div>
            <div className="w-full">
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Train your model and evaluate its performance
              </h3>
              <ul className="list-disc list-inside text-gray-300 mt-4 text-base md:text-lg">
                <li>AI models are only as good as the data you feed them. High quality data will give high quality answers.</li>
                <li>The upload tool automatically converts documents into trainable data.</li>
                <li>Preview and test your trained AI model before deploying.</li>
              </ul>
            </div>
          </div>
          
          {/* Desktop version (side by side) */}
          <div className="hidden md:flex md:flex-row md:gap-8">
            <div className="md:w-1/2">
              <img
                src="https://github.com/seanhlewis/seanhlewis/assets/96705270/c9a467d9-aeb9-403d-bd19-87a52e37cdb2"
                alt="Train Your Model"
                className="rounded-2xl w-full object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Train your model and evaluate its performance
              </h3>
              <ul className="list-disc list-inside text-gray-300 mt-4 text-base md:text-lg">
                <li>AI models are only as good as the data you feed them. High quality data will give high quality answers.</li>
                <li>The upload tool automatically converts documents into trainable data.</li>
                <li>Preview and test your trained AI model before deploying.</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Share Your Model */}
        <div id="train" className="mb-12">
          {/* Mobile version (image then text) */}
          <div className="block md:hidden">
            <div className="w-full mb-6">
              <img
                src="https://github.com/seanhlewis/seanhlewis/assets/96705270/ab309f94-2dbf-46ca-83d8-c4347ba12ec7"
                alt="Share Your Model"
                className="rounded-2xl w-full object-cover"
              />
            </div>
            <div className="w-full">
              <h3 className="text-2xl md:text-3xl font-bold text-white">Share your model</h3>
              <ul className="list-disc list-inside text-gray-300 mt-4 text-base md:text-lg">
                <li>Trained models are stored permanently on our servers.</li>
                <li>Your AI can be deployed privately or publicly as a focused site.</li>
                <li>Customize and share your model with the world.</li>
              </ul>
            </div>
          </div>
          
          {/* Desktop version (side by side) */}
          <div className="hidden md:flex md:flex-row md:gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl md:text-3xl font-bold text-white">Share your model</h3>
              <ul className="list-disc list-inside text-gray-300 mt-4 text-base md:text-lg">
                <li>Trained models are stored permanently on our servers.</li>
                <li>Your AI can be deployed privately or publicly as a focused site.</li>
                <li>Customize and share your model with the world.</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://github.com/seanhlewis/seanhlewis/assets/96705270/ab309f94-2dbf-46ca-83d8-c4347ba12ec7"
                alt="Share Your Model"
                className="rounded-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Multilingual Capability */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Multilingual Capability</h2>
          <img src="./img/white_globe.webp" alt="Globe" className="mx-auto w-1/3 md:w-1/4 mb-6" />
          <p className="text-gray-300 mx-auto w-full md:w-3/4 text-lg">
            DataPowered AI automatically converses in over 30+ prominent languages. From English and Spanish to Mandarin, French, German, and beyond.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Steps