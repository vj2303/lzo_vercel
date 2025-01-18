"use client"
import Footer from '../../../../../components/Footer'
import Navbar from '../../../../../components/Navbar'
import React, { useState } from 'react'
import Sidebar from './Sidebar'
import MainContent from './MainContent'
import { Provider } from 'react-redux'
import store from '../../../../../redux/store'

// import { serviceData } from './ServiceData'

const ServiceContainer = () => {
  const [selectedService, setSelectedService] = useState(null);
  return (
    <div className='pt-[100px]'>
      <Navbar />
      <div className='flex sm:px-[100px]' >
        <Sidebar onSelect={setSelectedService} />
        <Provider store={store}>
          <MainContent selectedService={selectedService} serviceData={selectedService} />
        </Provider>
      </div>
      <Footer />
    </div>
  )
}

export default ServiceContainer