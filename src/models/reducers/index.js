import {combineReducers} from "redux";
import {useProductsReducer} from "./products";

export const useReducers =()=>{
    const products = useProductsReducer();
    return combineReducers({
        products
    })
}