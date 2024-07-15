// import { useEffect } from "react";

const cartReducer = (state, action) => {
    if (action.type === 'ADD_TO_CART') {
        let { id, color, amount, product } = action.payload
        // console.log(product)

        let existingproduct = state.cart.find((curitem) => curitem.id === id + color)

        if (existingproduct) {
            let updatedproduct = state.cart.map((curelem) => {
                if (curelem.id === id + color) {
                    let newamount = curelem.amount + amount;
                    if (newamount >= curelem.max) {
                        newamount = curelem.max
                    }
                    return {
                        ...curelem,
                        amount: newamount
                    }
                }
                else {
                    return curelem;
                }
            })
            return {
                ...state,
                cart: updatedproduct,

            }
        }


        else {

            let cartproduct = {
                id: id + color,
                name: product.name,
                color,
                amount,
                image: product.image[0].url,
                price: product.price,
                max: product.stock
            }

            return {
                ...state,
                cart: [...state.cart, cartproduct],

            }
        }
    }

    if (action.type === 'REMOVE_ITEM') {
        let updatedcart = state.cart.filter((curitem) => curitem.id !== action.payload)

        return {
            ...state,
            cart: updatedcart,
        }
    }
    if (action.type === 'CLEAR_CART') {
        return {
            ...state,
            cart: [],
        }
    }

    // to set icrement and decrement 
    if (action.type === 'setdecrement') {
        let powerproduct = state.cart.map((curitem) => {
            if (curitem.id === action.payload) {
                // console.log(curitem)
                let decrementamount = curitem.amount - 1;
                if (decrementamount <= 1) {
                    decrementamount = 1
                }
                return {
                    ...curitem,
                    amount: decrementamount
                }
            }
            else {
                return curitem
            }
        })
        return {
            ...state,
            cart: powerproduct
        }
    }
    if (action.type === 'setincrement') {
        let powerproduct = state.cart.map((curitem) => {
            if (curitem.id === action.payload) {
                // console.log(curitem)
                let incrementamount = curitem.amount + 1;
                if (incrementamount >= curitem.max) {
                    incrementamount = curitem.max
                }
                return {
                    ...curitem,
                    amount: incrementamount
                }
            }
            else {
                return curitem
            }
        })
        return {
            ...state,
            cart: powerproduct
        }
    }
if(action.type==='CART_TOTAL_ITEM'){
    let updateitemval=state.cart.reduce((initialval,curelem)=>{
        let {amount}=curelem;
        initialval=initialval+amount;
        return initialval
    },0)
    return{
        ...state,
        total_item:updateitemval,
    }
}
if(action.type==='CART_TOTAL_PRICE'){
    let updateitemval=state.cart.reduce((initialval,curelem)=>{
        let {price,amount}=curelem;
        let oneitemprice=price*amount;
        initialval=initialval+oneitemprice;
        // console.log(initialval)
        return initialval
    },0)
    return{
        ...state,
        total_price:updateitemval,
    }
}


    return state;
}
export default cartReducer