import React from 'react'
import './Card.scss'
type Props = {
    text: string;
    number: string | number;
    icon: string;
  };


const Card: React.FC<Props> = ({icon, text, number}) => {
  return (
    <div className="cards">
          <object data={icon} type=""></object>
          <p>{text}</p>
          <h1>{number}</h1>
    </div>
  )
}

export default Card