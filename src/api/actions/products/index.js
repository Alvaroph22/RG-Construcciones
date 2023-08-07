import {useProductsProviders} from "../../providers";
import {useProductsString} from "../../../models";

export const useProductsActions = ()=>{
    const {getProductsProvider, getCategoriesProvider, getProductProvider} = useProductsProviders();
    const {GET_PRODUCTS,GET_CATEGORIES,GET_PRODUCT,ADD_TO_CART} = useProductsString()
    const getProductsAction = (onSuccess,onError) => async (dispatch) => {
        try {
            const response = await getProductsProvider()
            dispatch({
                type:GET_PRODUCTS,
                payload:response
            })
            onSuccess && onSuccess()
        }catch (e) {
            console.log(e)
            onError && onError()
        }
    }
    const getProductAction = ({slug},onSuccess,onError) => async (dispatch) => {
        try {
            const response = await getProductProvider({slug})
            dispatch({
                type:GET_PRODUCT,
                payload:response
            })
            onSuccess && onSuccess()

        }catch (e) {
            console.log(e)
            onError && onError()
        }
    }
    const getCategoriesAction = (onSuccess,onError) => async (dispatch) => {
        try {
            const response = await getCategoriesProvider()
            dispatch({
                type:GET_CATEGORIES,
                payload:response
            })
            onSuccess && onSuccess()

        }catch (e) {
            console.log(e)
            onError && onError()
        }
    }
    const addToCartAction = (item,onSuccess,onError) =>  (dispatch) => {
        try {
            dispatch({
                type:ADD_TO_CART,
                payload:item
            })
            onSuccess && onSuccess()

        }catch (e) {
            console.log(e)
            onError && onError()
        }
    }
    return {
        getProductsAction,
        getProductAction,
        getCategoriesAction,
        addToCartAction,
    }
}