// src/App.tsx
import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Steps from './components/Steps'
import Footer from './components/Footer'

const App: React.FC = () => {
  return (
    <div className="relative">
      {/* Background div */}
      <div
        id="bg"
        className="absolute inset-0 z-0"
        style={{
          background: '#030522',
          opacity: 0,
          animation: 'backgroundAnimation 0.1s forwards'
        }}
      ></div>
      <Header />
      <main className="relative z-10">
        <Hero />
        <Steps />
      </main>
      <Footer />
    </div>
  )
}

export default App
