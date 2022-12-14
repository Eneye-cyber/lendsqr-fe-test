import React, { useState, useEffect, Fragment } from 'react'
import './TableComponent.scss'
import Form from './../../../components/dashboard/users/Form'
import filter from './../../../assets/icons/filter-results-button.svg'
import chevLeft from './../../../assets/icons/chevLeft.svg'
import chevRight from './../../../assets/icons/chevRight.svg'
import eye from './../../../assets/icons/eye.svg'
import blacklist from './../../../assets/icons/blacklist.svg'
import activate from './../../../assets/icons/activate.svg'
import menu from './../../../assets/icons/menuDot.svg'
import { Root, Table } from '../../../interface'
import { determineClass, getData, setStatus, sortDate, tableUser } from '../../../helpers/functionHelpers'
import { tableHeader } from '../../../helpers/dataHelpers'
import { useNavigate } from "react-router-dom";
type Props = {
    userProp: Root;
  };



const TableComponent: React.FC<Props> = ({userProp}) => {
    const [Users, fetchUsers] = useState<Root>([])
    const [UpdateStatus, setUpdate] = useState<number>(0)
    const [Status, fetchStatus] = useState<number>(0)
    const [Filters, setFilters] = useState<boolean>(false)
    const [Length, setLength] = useState<number>(10)
    const [Start, setStart] = useState<number>(0)
    const [End, setEnd] = useState<number>(10)
    const [userData, setUserData] = useState<Table[]>([])
    
    const navigate = useNavigate();

    const changeLength = (event: React.ChangeEvent<HTMLSelectElement>) => {
      let value = event.target.value
      setLength(parseInt(value));
      setEnd(parseInt(value) + Start)
    };
    const toggleOption = (element: number) => {
      if (Status == element)
        fetchStatus(0)
      else
        fetchStatus(element)
    }
  
   
   const viewUser = (element: string) => {
      let searchObject= Users.find((user) => user.id == element);
      localStorage.setItem('user', JSON.stringify(searchObject));
      navigate(`${element}`)    
   }
   
    useEffect(() => { 
        fetchUsers(userProp)
    }, [])
  
    useEffect(() => {
      setUserData([...tableUser(Users,Start,End)]) 
  }, [Users,End,UpdateStatus]);
  
   
    //Table Headers
    const headItems = tableHeader.map((item, index) => 
      <th key={index + 'A'} className={determineClass(item)}>
        {item} <img src={filter} className="desktop_only" alt="filter" onClick={() => { setFilters(!Filters) }} />
      </th>
    );
    //Table Data
    const dataItems = userData.map((item, index) => 
      <tr key={index + 'B'}>
        <td className='desktop_only'>{item.org.trim()}</td>
        <td>{item.username.trim()}</td>
        <td className='desktop_tablet'>{item.email.trim()}</td>
        <td>{item.phone.trim()}</td>
        <td className='desktop_only'>{item.date.trim()}</td>
        <td className='status'>
          <div className={item.status.trim()}>{item.status.trim()}</div>   
          <a href="#" className="dropdown" onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {e.preventDefault(); toggleOption(parseInt(item.id)) }}>
            <img src={menu}></img>
          </a>
          <div className={`options ${Status != parseInt(item.id) ? "inactive__option" : ""}`}>
            <a href="#" onClick={(e) => {e.preventDefault(); viewUser(item.id);}}>
              <img src={eye} width="15px" className='mr_3' /> View Details
            </a>
            <a href="#" onClick={(e) => {e.preventDefault(); setStatus(item.id, 'blacklisted'); toggleOption(parseInt(item.id)); setUpdate(UpdateStatus+1)}}>
              <img src={blacklist} width="15px"  className='mr_3'></img> Blacklist User
            </a>
            <a href="#" onClick={(e) => {e.preventDefault(); setStatus(item.id, 'active'); toggleOption(parseInt(item.id)); setUpdate(UpdateStatus+1)}}>
              <img src={activate} width="15px" className='mr_3'></img> Activate User
            </a>
          </div>
        </td>
      </tr>
    );
  
    const goTo = (element: number) => {
      let end = element * Length
      let start = end - Length
      setStart(start)
      setEnd(end)
    }
  
    const pagination = Array.from({length: (Users.length/Length) }, (_, i) => i + 1).map((num) => 
          <a className={`${End/Length == num ? 'paginate__active' : ''}`}
          key={num.toString()} 
          onClick={(e) => { e.preventDefault(); goTo(num) }} 
          href="#"
          >{num}</a>
    );
    return (
    <>
      <div className="table__container">
        <Form state={Filters} />
        
        <table>
          <thead><tr>{headItems}</tr></thead>
          <tbody>{dataItems}</tbody>
        </table>
      </div>

      <div className="sorting">
        <div className="sort__length">
          <label htmlFor="">Showing</label>
          <select value={Length} onChange={changeLength}>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          <label htmlFor="">out of 100</label>
        </div>

        <div className="pagination">
          <button className="prev"><img src={chevLeft} /></button>
            {pagination}
        <button className="next" ><img src={chevRight} /></button>

        </div>
      </div>
    </>
    )
}

export default TableComponent



