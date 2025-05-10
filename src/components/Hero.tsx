import React from 'react'

const Hero: React.FC = () => {
  const scrollToSteps = (e: React.MouseEvent) => {
    e.preventDefault();
    const stepsSection = document.querySelector('section:nth-of-type(2)');
    if (stepsSection) {
      stepsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-36 pb-12 relative z-10">
      <div className="container flex flex-col md:flex-col items-center">
        {/* Left Column â€" Animated Text and Buttons */}
        <div className="w-full">
          <h1 className="text-4xl md:text-5xl font-semibold text-white mb-4 max-w-[75%]">
            <span className="inline-block whitespace-pre text-animate delay-0">DataPowered AI </span>
            <span className="inline-block whitespace-pre text-animate delay-100">lets </span>
            <span className="inline-block whitespace-pre text-animate delay-200">you </span>
            <span className="inline-block whitespace-pre text-animate delay-300">build </span>
            <span className="inline-block whitespace-pre text-animate delay-400">custom </span>
            <span className="inline-block whitespace-pre text-animate delay-500">generative </span>
            <span className="inline-block whitespace-pre text-animate delay-600">AI </span>
            <span className="inline-block whitespace-pre text-animate delay-700">models </span>
            <span className="inline-block whitespace-pre text-animate delay-800">in </span>
            <span className="inline-block whitespace-pre text-animate delay-900">minutes</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-400">
            <span className="inline-block whitespace-pre text-animate-2 delay-700">Experience </span>
            <span className="inline-block whitespace-pre text-animate-2 delay-800">the </span>
            <span className="inline-block whitespace-pre text-animate-2 delay-800">new </span>
            <span className="inline-block whitespace-pre text-animate-2 delay-900">standard </span>
            <span className="inline-block whitespace-pre text-animate-2 delay-900">of </span>
            <span className="inline-block whitespace-pre text-animate-2 delay-950">AI </span>
            <span className="inline-block whitespace-pre text-animate-2 delay-1000">development.</span>
          </h2>
          <div className="mt-8 flex space-x-4">
            <a
              href="login.html"
              className="et_pb_button et_pb_button_2_tb_header et_pb_bg_layout_light text-animate"
              style={{
                borderRadius: '15px',
                borderColor: '#B7B8B8',
                borderWidth: '0.1px',
                borderStyle: 'solid',
                background: 'linear-gradient(to right, #24243e, #302b63, #0f0c29)',
                animationDelay: '1.4s',
                color: '#fff',
                padding: '.5em 1.2em',
                fontSize: '1.1rem',
                whiteSpace: 'nowrap'
              }}
            >
              Start building
            </a>
            <a
              href="#"
              onClick={scrollToSteps}
              className="px-4 py-2 text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white flex items-center text-lg text-animate delay-1400"
            >
              Learn how
              <svg
                className="ml-2"
                width="16"
                height="16"
                fill="#ededed"
                viewBox="0 0 16 16"
              >
                <path d="M5.46967 11.4697C5.17678 11.7626 5.17678 12.2374 5.46967 12.5303C5.76256 12.8232 6.23744 12.8232 6.53033 12.5303L10.5303 8.53033C10.8207 8.23999 10.8236 7.77014 10.5368 7.47624L6.63419 3.47624C6.34492 3.17976 5.87009 3.17391 5.57361 3.46318C5.27713 3.75244 5.27128 4.22728 5.56054 4.52376L8.94583 7.99351L5.46967 11.4697Z" />
              </svg>
            </a>
          </div>
        </div>
        {/* Video Section - Full width and with proper spacing */}
        <div className="w-full mt-16 md:mt-12">
          <div
            className="et_pb_video relative"
            style={{
              width: '100%',
              margin: 'auto',
              paddingBottom: '56.25%', /* 16:9 aspect ratio */
              borderRadius: '60px',
              overflow: 'hidden'
            }}
          >
            <iframe
              src="https://www.youtube-nocookie.com/embed/zQCP0H5OCmc?version=3&loop=1&playlist=zQCP0H5OCmc&controls=0&autoplay=1&mute=1&vq=hd1080"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full pointer-events-none"
              style={{ borderRadius: '60px' }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero