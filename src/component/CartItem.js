import React from 'react'
import Formatprice from './Formatprice'
import Cartamounttoggle from './Cartamounttoggle'
import { FaTrash } from 'react-icons/fa'
import { useCartContext } from '../context/cartcontext'


const CartItem = ({ id, name, image, color, price, amount ,stock}) => {
   const {removeItem,setdecrease,setincrease} =useCartContext() 

//   //  const [cartamount,setcartamount]=useState(amount)
// const setdecrease=()=>{
//     // cartamount>1?setcartamount(cartamount-1):setcartamount(1)
// }
// const setincrease=()=>{
//     // cartamount<stock?setcartamount(cartamount+1):setcartamount(stock)
// }
  return (
    <div className='cart_heading grid grid-five-column'>
      <div className="cart-image--name">
        <div>
            <figure>
                <img src={image} alt={id} />
            </figure>
        </div>
        <div>
            <p>{name}</p>
            <div className="color-div">
                <p>color:</p>
                <div className='color-style' style={{backgroundColor:color,color:color}}></div>
            </div>
        </div>
      </div>
      {/* price  */}
      <div className="cart-hide">
        <p><Formatprice price={price}/> </p>
      </div>

      {/* quantity  */}
      <div>
      <Cartamounttoggle
            amount={amount}
            setdecrease={()=>setdecrease(id)}
            setincrease={()=>setincrease(id)}
            />
      </div>

      {/* subtotal 
       */}
<div className="cart-hide">
    <p><Formatprice price={price*amount}/></p>
</div>

<div>
    <FaTrash className='remove_icon' onClick={()=>removeItem(id)}/>
</div>

    </div>
  )
}

export default CartItem
