const filterReducer = (state, action) => {

    switch (action.type) {
        case "LOAD_FILTER_PRODUCTS":
            let pricearr = action.payload.map((curelem) => curelem.price);
            // const max = Math.max.apply(null, pricearr);
            let max = Math.max(...pricearr);


            return {
                ...state,
                allproducts: [...action.payload],
                filters: { ...state.filters, maxprice: max, price: max ,minprice:0},
                filterproducts: [...action.payload],
            }
        case "Set_gridview":
            return {
                ...state,
                gridview: true
            }
        case "Set_listview":
            return {
                ...state,
                gridview: false

            }
        case "getSortValue":
            return {
                ...state,
                sorting_value: action.payload,

            }
        case "UPDATE_FILTERS_VALUE":
            const { name, value } = action.payload
            return {
                ...state,
                filters: {
                    ...state.filters,
                    [name]: value
                }

            }
           
        case "SORTING_PRODUCTS":
            let newsortdata;
            const { filterproducts, sorting_value } = state
            let tempsortproduct = [...filterproducts]

            const sortingproducts = (a, b) => {
                if (sorting_value === 'lowest') {
                    return a.price - b.price
                }
                if (sorting_value === 'highest') {
                    return b.price - a.price
                }
                if (sorting_value === 'a-z') {
                    return a.name.localeCompare(b.name)
                }
                if (sorting_value === 'z-a') {
                    return b.name.localeCompare(a.name)
                }
            }
            newsortdata = tempsortproduct.sort(sortingproducts)

            return {
                ...state,
                filterproducts: newsortdata,

            }

        case "FILTER_PRODUCTS":
            let { allproducts } = state;
            let tempfilterproduct = [...allproducts];
            const { text, category, company, color, price } = state.filters
            if (text) {
                tempfilterproduct = tempfilterproduct.filter((curelem) => {
                    return curelem.name.toLowerCase().includes(text)
                })
            }
            if (category !== 'All') {
                tempfilterproduct = tempfilterproduct.filter((curelem) => {
                    return curelem.category === category
                })
            }

            if (company !== 'All') {
                tempfilterproduct = tempfilterproduct.filter((curelem) => {
                    return curelem.company === company
                })
            }
            if (color !== 'All') {
                tempfilterproduct = tempfilterproduct.filter((curelem) => {

                    return curelem.colors.includes(color)
                }
                )
            }
            if (price === 0) {
                tempfilterproduct = tempfilterproduct.filter(
                  (curElem) => curElem.price === price
                );
              } else {
                tempfilterproduct = tempfilterproduct.filter(
                  (curElem) => curElem.price <= price
                );
              }
            
            return {
                ...state,
                filterproducts: tempfilterproduct

            }
            case"CLEAR_FILTERS":
            
            
            return {
                ...state,
                filters: {
                  ...state.filters,
                  text: "",
                  category: "All",
                  company: "All",
                  color: "All",
                  maxprice: 0,
                  price: state.filters.maxprice,
                  minprice: 0,
                },
                // filterproducts: state.allproducts, 
                
            }



        default:
            return state;
    }
}
export default filterReducer



