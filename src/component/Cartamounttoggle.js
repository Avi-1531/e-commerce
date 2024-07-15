import React from 'react'
import { FaMinus,FaPlus } from 'react-icons/fa'

const Cartamounttoggle = ({amount,setdecrease,setincrease}) => {
  return (
    <div className='cart-button' >
      <div className="amount-toggle">
        <button onClick={()=>setdecrease()}>
            <FaMinus/>
        </button>
        <div className="amount-style">
            {amount}
        </div>
        <button onClick={()=>setincrease()}>
            <FaPlus/>
        </button>

        
      </div>
    </div>
  )
}

export default Cartamounttoggle
