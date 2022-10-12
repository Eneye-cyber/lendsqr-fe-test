import React, { useState } from 'react'
import './SideBar.scss'
import brief from './../../assets/icons/briefcase.svg'
import arrowDown from './../../assets/icons/next.svg'
import home1 from './../../assets/icons/home1.svg'

import { NavLink } from 'react-router-dom'
import { business, customers, settings } from '../../helpers/dataHelpers'


type Props = {
    state: boolean;
  };
const SideBar: React.FC<Props> = ({state}) => {
    const listItems = customers.map((customer, id) =>

    <NavLink key={id} style={{pointerEvents: customer.linkDisabled ? 'none' : 'auto'}} to={customer.page} className={({ isActive }) => (isActive ? 'side__link active' : 'side__link link__inactive')}>
                <object data={customer.icon} width="18" height="18"> </object>
                <p>{customer.text}</p>
    </NavLink>
    );
    const businessItems = business.map((item, id) =>

    <NavLink key={id} style={{pointerEvents: item.linkDisabled ? 'none' : 'auto'}} to={item.page} className={({ isActive }) => (isActive ? 'side__link active' : 'side__link link__inactive')}>
                <object data={item.icon} width="18" height="18"> </object>
                <p>{item.text}</p>
    </NavLink>
    );
    const settingsItems = settings.map((item, id) =>

    <NavLink key={id} to={item.page} style={{pointerEvents: item.linkDisabled ? 'none' : 'auto'}} className={({ isActive }) => (isActive ? 'side__link active' : 'side__link link__inactive')}>
                <object data={item.icon} width="18" height="18"> </object>
                <p>{item.text}</p>
    </NavLink>
    );

  return (
    <div className={`sidebar ${state ? "active" : "inactive"}`}>
        <div className="container">
            <a href="#" className='side__link mb_4'>
                <object data={brief} width="18" height="18"> </object>
                <p>Switch Organization</p>
                <object data={arrowDown} className="chev" width="14" height="14"> </object>
            </a>

            <a href="#" className='side__link link__inactive'>
                <object data={home1} width="18" height="18"> </object>
                <p>Dashboard</p>
            </a>

            <p className="side__subheader">CUSTOMERS</p>
            {listItems}

            <p className="side__subheader">BUSINESS</p>
            {businessItems}

            <p className="side__subheader">SETTINGS</p>
            {settingsItems}
        </div>
    </div>
  )
}

export default SideBar