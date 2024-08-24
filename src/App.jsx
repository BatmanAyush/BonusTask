import React from 'react'


import Header from './assets/components/Header'
import Hero from './assets/components/Hero'
import Main from './assets/components/Main'
import Facilities from './assets/components/Facilities'
import Footer from './assets/components/Footer'
const App = () => {
  return (
    <div className='app'>
      <Header/>
      <Hero/>
      <Main/>
      <Facilities/>
      <Footer/>
    </div>
  )
}

export default App
