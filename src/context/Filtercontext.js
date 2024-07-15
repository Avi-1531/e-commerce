import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductcontext } from "./Productcontext";
import reducer from "../reducer/filterReducer";

const FilterContext = createContext();
const initialstate = {
    filterproducts: [],
    allproducts: [],
    gridview: true,
    sorting_value: "lowest",
    filters: {
        text: "",
        category: "All",
        company: "All",
        color: "All",
        price:0,
        maxprice:0,
        minprice:0

    }
}


const Filtercontextprovider = ({ children }) => {

    const { products } = useProductcontext();
    //  now reducer is defined 
    const [state, dispatch] = useReducer(reducer, initialstate)

    // to set the grid view 
    const setgridview = () => {
        return dispatch({ type: "Set_gridview" });
    }
    // to set the list view 
    const setlistview = () => {
        return dispatch({ type: "Set_listview" });
    }

    // sorting function 
    const sorting = (event) => {
        let sort_value = event.target.value;
        return dispatch({ type: "getSortValue", payload: sort_value })
    }
    // update the filter value 
    const updatefiltervalue = (event) => {
        let name = event.target.name
        let value = event.target.value
        
        return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } })
    }
    // to clear all filters 
    const clearfilters = () => {
       
        
        return dispatch({ type: "CLEAR_FILTERS" })
    }

    // to sort the products 
    useEffect(() => {
        dispatch({ type: "FILTER_PRODUCTS" })
        dispatch({ type: "SORTING_PRODUCTS" })
        // dispatch({ type: "CLEAR_FILTERS" })
    }, [products,state.sorting_value, state.filters])


    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products })
        // eslint-disable-next-line
    }, [products])


    return (
        <FilterContext.Provider value={{ ...state, setgridview, setlistview, sorting, updatefiltervalue,clearfilters }}>
            {children}
        </FilterContext.Provider>
    )
}


// custom hooks 
const useFiltercontext = () => {
    return useContext(FilterContext)
}

export { Filtercontextprovider, useFiltercontext }


