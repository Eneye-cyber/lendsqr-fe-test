import React, { useEffect, useState } from 'react'
import './UserDetail.scss'
import avatar from './../../../assets/flaticons/avatarIcon.svg'
import left from './../../../assets/flaticons/arrowLeft.svg'
import star from './../../../assets/icons/star.svg'
import starOutline from './../../../assets/icons/starOutline.svg'
import { tabDetails } from '../../../helpers/dataHelpers'
import { useNavigate } from "react-router-dom";
import { Root2 } from '../../../interface'


const tabs = tabDetails.map((tab,index) => 
    <div key={index.toString()} className={`tab ${tab.active ? 'tab__active' : ''} `}>
        <p>{tab.link}</p>
    </div>

);
const UserDetail = () => {
    const [User, fetchUser] = useState<Root2>()

    const navigate = useNavigate();

    const getData = () => {
        var user = JSON.parse(localStorage.getItem('user') || '');
        console.log(user);
        fetchUser(user)
        
      }
    useEffect(() => { 
        getData() 
      }, [])
  return (
    <div className='container'>
      <div className="return__link">
        <a href="#" onClick={(e) => {
          e.preventDefault();
          navigate("../users")
          
        }}><img src={left} alt="Return" />Back to Users</a>
      </div>

      <div className="title__container">
        <div className="title__text"><h3>User Details</h3></div>
        <div className="title__btns">
            <button className="blacklist">BLACKLIST USER</button>
            <button className="activate">ACTIVATE USER</button>
        </div>
      </div>

      <div className="profile__container">
        <div className="profile">
            <div className="avatar_name_id">
            <div className="avatar__container">
                <img src={User?.profile.avatar} />
            </div>
            <div className="name__id">
                <p className="name">{User?.userName}</p>
                <p className="id">{User?.accountNumber}</p>
            </div>
            </div>

            <div className="user__tier">
                <p>User’s Tier</p>
                <div className="tiers">
                    <a href=""><img src={star} alt="" /></a>
                    <a href=""><img src={starOutline} alt="" /></a>
                    <a href=""><img src={starOutline} alt="" /></a>
                </div>
            </div>
            
            <div className="avatar_name_id">
                <div className="name__id">
                    <p className="name">₦{User?.accountBalance}</p>
                    <p className="id">{User?.accountNumber}/Providus Bank</p>
                </div>
            </div>
        </div>
        
        <div className="profile__links">{tabs}</div>
      </div>

      <div className="user__container">
        <div className="info__group">
            <div className="title"><p>Personal Information</p></div>
            <div className="details">
                <div className="detail">
                    <p>FULL NAME</p>
                    <h5>{User?.profile.firstName + ' ' + User?.profile.firstName} </h5>
                </div>

                <div className="detail">
                    <p>PHONE NUMBER</p>
                    <h5>{User?.profile.phoneNumber} </h5>
                </div>

                <div className="detail">
                    <p>Email Address</p>
                    <h5>{User?.email} </h5>
                </div>

                <div className="detail">
                    <p>BVN</p>
                    <h5>{User?.profile.bvn} </h5>
                </div>

                <div className="detail">
                    <p>Gender</p>
                    <h5>{User?.profile.gender} </h5>
                </div>
                <div className="detail">
                    <p>Marital Status</p>
                    <h5>-</h5>
                </div>
                <div className="detail">
                    <p>CHILDREN</p>
                    <h5>-</h5>
                </div>
                <div className="detail">
                    <p>TYPE OF RESIDENCE</p>
                    <h5>-</h5>
                </div>
            </div>
        </div>

        <div className="info__group">
            <div className="title"><p>Education and Employment</p></div>
            <div className="details">
                <div className="detail">
                    <p>LEVEL OF EDUCATION</p>
                    <h5>{User?.education.level} </h5>
                </div>

                <div className="detail">
                    <p>EMPLOYMENT STATUS</p>
                    <h5>{User?.education.employmentStatus} </h5>
                </div>

                <div className="detail">
                    <p>SECTOR OF EMPLOYMENT</p>
                    <h5>{User?.education.sector} </h5>
                </div>

                <div className="detail">
                    <p>DURATION OF EMPLOYMENT</p>
                    <h5>{User?.education.duration} </h5>
                </div>

                <div className="detail">
                    <p>OFFICE EMAIL</p>
                    <h5>{User?.education.officeEmail} </h5>
                </div>
                <div className="detail">
                    <p>Monthly Income</p>
                    <h5>{User?.education.monthlyIncome[0] + ' - ' + User?.education.monthlyIncome[1]} </h5>
                </div>
                <div className="detail">
                    <p>Loan Repayment</p>
                    <h5>{User?.education.loanRepayment} </h5>
                </div>
            </div>
        </div>

        <div className="info__group">
            <div className="title"><p>Socials</p></div>
            <div className="details">
                <div className="detail">
                    <p>Twitter</p>
                    <h5>{User?.socials.twitter} </h5>
                </div>

                <div className="detail">
                    <p>Facebook</p>
                    <h5>{User?.socials.facebook} </h5>
                </div>

                <div className="detail">
                    <p>Instagram</p>
                    <h5>{User?.socials.instagram} </h5>
                </div>
            </div>
        </div>

        <div className="info__group">
            <div className="title"><p>Guarantor</p></div>
            <div className="details">
                <div className="detail">
                    <p>Full Name</p>
                    <h5>{User?.guarantor.firstName + ' ' + User?.guarantor.lastName} </h5>
                </div>

                <div className="detail">
                    <p>Phone Number</p>
                    <h5>{User?.guarantor.phoneNumber} </h5>
                </div>

                <div className="detail">
                    <p>Email Address</p>
                    <h5>{User?.guarantor.address} </h5>
                </div>
                
                <div className="detail">
                    <p>Relationship</p>
                    <h5>-</h5>
                </div>
            </div>
        </div>

        <div className="info__group">
            <div className="title"><p></p></div>
            <div className="details">
                <div className="detail">
                    <p>Full Name</p>
                    <h5>{User?.guarantor.firstName + ' ' + User?.guarantor.lastName} </h5>
                </div>

                <div className="detail">
                    <p>Phone Number</p>
                    <h5>{User?.guarantor.phoneNumber} </h5>
                </div>

                <div className="detail">
                    <p>Email Address</p>
                    <h5>{User?.guarantor.address} </h5>
                </div>
                
                <div className="detail">
                    <p>Relationship</p>
                    <h5>-</h5>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default UserDetail