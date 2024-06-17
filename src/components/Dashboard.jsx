import React from 'react'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
        <SideBar />
        <Outlet />
    </div>
  )
}

export default Dashboard