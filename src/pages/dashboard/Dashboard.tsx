import React, { useState } from 'react'
import './Dashboard.scss'
import Header from '../../components/dashboard/Header'
import SideBar from '../../components/dashboard/SideBar'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  const [state, setState] = useState(true);
  const handleOnSubmit = (e: boolean) => {
    setState(e)
  };
  
  return (
    <div>
        <Header state={state} handleOnSubmit={handleOnSubmit} />
        <div className='flex'>
            <SideBar state={state} />
            <div className="main">
              <Outlet />
            </div>
        </div>
    </div>
  )
}

export default Dashboard