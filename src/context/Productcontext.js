import { createContext,useContext, useEffect, useReducer } from "react";
import axios from 'axios';
import reducer from "../reducer/productReducer";


const AppContext=createContext();

const Api="https://api.pujakaitem.com/api/products";
const initialstate={
    isloading:false,
    isError:false,
    products:[],
    featureproducts:[],
    isSingleloading:false,
    singleproduct:{}
}

const AppProvider=({children})=>{

    const[state,dispatch]=useReducer(reducer,initialstate)

const getproducts=async(url)=>{
    dispatch({type:"Set_Loading"})
try {
    const res= await axios.get(url);
    const products=await res.data;
   
    dispatch({type:"SET_API_DATA",payload:products})
    
} catch (error) {
    dispatch({type:"Api_Error"})
}
}

// my 2nd api call for my single product page 
const getsingleproduct=async(url)=>{
    dispatch({type:"Set_single_loading"})
try {
    const res= await axios.get(url);
    const singleproduct=await res.data;

    dispatch({type:"SET_SINGLE_PRODUCT",payload:singleproduct})

} catch (error) {
    dispatch({type:"Setsingle_Error"})
}
}


    useEffect(()=>{
getproducts(Api);
    },[])



return(
<AppContext.Provider  value={{...state,getsingleproduct}}>
    {children}
</AppContext.Provider>

)
}

// custom hooks 
const useProductcontext=()=>{
    return  useContext(AppContext)
}

export {AppProvider,AppContext,useProductcontext};