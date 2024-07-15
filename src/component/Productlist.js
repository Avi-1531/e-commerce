import React from 'react'

import { useFiltercontext } from "../context/Filtercontext";
import Gridview from './Gridview';
import Listview from './Listview';




const Productlist = () => {
  const {filterproducts,gridview}=useFiltercontext();
  if(gridview===true){
    return <Gridview products={filterproducts}/>
  }
  if(gridview===false){
    return <Listview products={filterproducts}/>
  }
}


export default Productlist
