const productReducer = (state, action) => {

    switch (action.type) {
        case "Set_Loading":
            return {
                ...state,
                isloading: true,
            }
        case "Api_Error":
            return {
                ...state,
                isloading: false,
                isError: true,
            }
        case "SET_API_DATA":
            const featuredata = action.payload.filter((element) => {
                return element.featured === true;
            })
            return {
                ...state,
                products: action.payload,
                isloading: false,
                featureproducts: featuredata,
            }
        case "Set_single_loading":
            return {
                ...state,
                isSingleloading: true,
            }
        case "SET_SINGLE_PRODUCT":
            return {
                ...state,
                singleproduct: action.payload,
                isSingleloading: false,

            }
        case "Setsingle_Error":
            return {
                ...state,
                isSingleloading: false,
                isError: true,
            }
        default:
            return {
                ...state
            }

    }

}
export default productReducer