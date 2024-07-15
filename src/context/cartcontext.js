import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/cartreducer";


const CartContext = createContext();
const getlocalcartdata=()=>{
  let newcartdata=localStorage.getItem("avicart");
  if(newcartdata===[]){
    return [];
  }
  else{
    return JSON.parse(newcartdata)
  }
}

const initialState = {
  // cart: [],
  cart:getlocalcartdata(),
  total_item: "",
  total_price: "",
  shipping_fee: 100000,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };
  const setdecrease = (id) => {
    dispatch({ type: "setdecrement", payload:  id  });
  };
  const setincrease = (id) => {
    dispatch({ type: "setincrement", payload: id });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };
  // to add the data to th elocal storage 
useEffect(()=>{
  localStorage.setItem("avicart",JSON.stringify(state.cart))
  dispatch({type:'CART_TOTAL_ITEM'})
  dispatch({type:'CART_TOTAL_PRICE'})
},[state.cart])

// to clear the cart 
const clearcart=()=>{
  dispatch({type:"CLEAR_CART"})
}




  return (
    <CartContext.Provider value={{ ...state, addToCart, removeItem,clearcart,setdecrease,setincrease }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };