import {createReducer} from "@reduxjs/toolkit";
import {useProductsString} from "../../strings";

export const useProductsReducer = ()=>{
    const {GET_PRODUCT,GET_CATEGORIES,GET_PRODUCTS,ADD_TO_CART,REMOVE_TO_CART,MODIFY_ITEM,TO_BUY} = useProductsString()

    const initialState = {
        data:[],
        selected:{},
        categories:[],
        cart:[],
    }
    const modifyItem = (array,it)=>{
        return array.map((item)=>{
            if(item.name===it.name){
                return {
                    ...item,
                    amount:it.amount
                }
            }
            return item
        })
    }
    const builderCallback = (builder)=>{
        builder.addCase(GET_PRODUCTS, (state,action) => ({...state, data: action.payload}))
            .addCase(GET_PRODUCT,(state,action) => ({...state,selected:action.payload}))
            .addCase(GET_CATEGORIES,(state,action) => ({...state,categories:action.payload}))
            .addCase(ADD_TO_CART,(state,action) => {
                const itemSelect = state.cart.find(item=>item.name==action.payload.name);
                console.log(itemSelect)
                return{
                    ...state,
                    cart: itemSelect ?  modifyItem(state.cart,{...itemSelect, amount:itemSelect.amount+1}): [...state.cart,action.payload]
                }
            })
            .addCase(REMOVE_TO_CART,(state,action) => ({...state,cart: [...state.cart,action.payload]}))
            .addCase(MODIFY_ITEM,(state,action) => ({...state,cart: modifyItem(state.cart,action.payload)}))
            .addCase(TO_BUY,(state,action) => ({...state,cart:[]}))
    }
    return createReducer(initialState, builderCallback)
}