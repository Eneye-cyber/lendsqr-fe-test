import React from 'react'
import './Header.scss'
import appLogo from './../../assets/logo.svg'
import searchIcon from './../../assets/icons/search.svg'
import notification from './../../assets/icons/notification.svg'
import chevDown from './../../assets/icons/chevDown.svg'
import avatarImg from './../../assets/icons/avatar.png'
import menuIcon from './../../assets/icons/icons8.svg'
type Props = {
    state: boolean;
    handleOnSubmit: (val: boolean) => void;
  };
const Header: React.FC<Props> = ({state, handleOnSubmit}) => {
  return (
    <div className='topnav'>
        <div className="container">
            <div className="topnav_logo_container">
                <img src={appLogo} className="logo" alt="Lendsqr logo" /> 
                <img src={menuIcon} width="24" height="24" 
                    onClick={(e: React.MouseEvent<HTMLDivElement>) => handleOnSubmit(!state)} 
                    className={`menu__icon ${state ? "" : "outlined"}`} 
                />
            </div>

            <div className="topnav_search_container">
                <form action="">
                    <input type="text" className="search__input" />
                    <button className="search__btn">
                        <object data={searchIcon} width="18" height="18"> </object>
                    </button>
                </form>
                
            </div>

            <div className="topnav_profile_container">
                <ul className='desktop'> 
                    <li><a href="#">Docs</a></li>
                    <li><object data={notification} width="18" height="18"></object></li>
                    <li className="dropdown">
                        <img src={avatarImg} alt="" />
                        <p>Adedeji</p>
                        <object data={chevDown} width="14" height="14"> </object>
                    </li>
                </ul>

                <ul className='mobile'>
                    <li className="dropdown">
                        <p>Adedeji</p>
                        <object data={chevDown} width="14" height="14"> </object>
                    </li>
                </ul>
                
            </div>
        </div>
    </div>
  )
}

export default Header