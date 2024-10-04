import React from 'react'
import {Routes, Route} from "react-router-dom"
import Dashboard from '../../pages/Dashboard/Dashboard.jsx'
import Notification from '../../pages/Notification/Notification.jsx'
import Analytics from '../../pages/Analytics/Analytics.jsx'
import "./home.css"
import Help from '../../pages/help/Help.jsx'
const Home = () => {
  return (
    <div className='home'>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/notifications" element={<Notification />} />
         <Route path='/help' element={<Help />}></Route>
      </Routes>
    </div>
  )
}

export default Home 