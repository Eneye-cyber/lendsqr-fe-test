import React, { useState, useEffect } from 'react'
import './Users.scss'
import Card from './../../../components/dashboard/users/Card'
import { Root } from '../../../interface'
import { getData, tableUser } from '../../../helpers/functionHelpers'
import { cards } from '../../../helpers/dataHelpers'
import { useNavigate } from "react-router-dom";
import TableComponent from '../../../components/dashboard/users/TableComponent'



const Users: React.FC = () => {
  const [Users, fetchUsers] = useState<Root>([])

  
  useEffect(() => { 
    async function update() {
      fetchUsers(await getData())
    }
    
    update()
  }, [])


  //Card Items
  const cardItems = cards.map((card, index) => 
    <Card key={index} icon={card.icon} text={card.text} number={card.number} />
  );
 
  return (
    <div className='container'>
      <div className="head__text">
        <h1>Users</h1>
      </div>
      <div className="cards__container">{cardItems} </div>

      {Users.length > 0 &&
        <TableComponent userProp={Users} />
      }
    </div>
  )
}


export default Users