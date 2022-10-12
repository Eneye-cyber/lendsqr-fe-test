import React from 'react'
import './Form.scss'
type Props = {
  state: boolean;
};

const Form: React.FC<Props> = ({state}) => {
  
  return (
    <div className={`filters ${state ? "" : "inactive__filter"}`}>
          <form action="">
            <div className='form__select'>
              <label htmlFor="organization">Organization</label>
              <select name="organization" id="">
                <option value="">Select</option>
                <option value="org">Lendsqr</option>
              </select>
            </div>

            <div className='form__select'>
              <label htmlFor="user">User</label>
              <input type="text" name="user" placeholder='User' id="" />
            </div>

            <div className='form__select'>
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder='Email' id="" />
            </div>

            <div className='form__select'>
              <label htmlFor="user">User</label>
              <input type="text" name="user" placeholder='User' id="" />
            </div>

            <div className='form__select'>
              <label htmlFor="date">Date</label>
              <input type="date" name="date" placeholder='date' id="" />
            </div>

            <div className='form__select'>
              <label htmlFor="phone">Phone Number</label>
              <input type="tell" name="phone" placeholder='Phone Number' id="" />
            </div>

            <div className='form__select'>
              <label htmlFor="status">Status</label>
              <select name="status" id="">
                <option value="">Select</option>
                <option value="org">Lendsqr</option>
              </select>
            </div>

            <div className="btn">
              <button className="btn__outline">Reset</button>
              <button className="btn__primary" type='submit'>Submit</button>
            </div>
          </form>
        </div>
  )
}
export default Form