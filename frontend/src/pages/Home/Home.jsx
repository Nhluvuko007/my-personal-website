import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import MidHeader from '../../components/MidHeader/MidHeader'
import ServiceDisplay from '../../components/ServiceDisplay/ServiceDisplay'
import NetworksDisplay from '../../components/NetworksDisplay/NetworksDisplay'
import CloudDisplay from '../../components/CloudDisplay/CloudDisplay'
import SystemDisplay from '../../components/SystemDisplay/SystemDisplay'
import AlarmDisplay from '../../components/AlarmDisplay/AlarmDisplay'
import About from '../../components/About/About'

const Home = () => {

  return (
    <div>
      <Header/>
      <MidHeader/>
      <ServiceDisplay/>
      <NetworksDisplay/>
      <CloudDisplay/>
      <SystemDisplay/>
      <AlarmDisplay/>
      <About/>
    </div>
  )
}

export default Home
