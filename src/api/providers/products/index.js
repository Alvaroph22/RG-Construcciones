import axios from "axios";
import {trackPromise} from "react-promise-tracker";
export const useProductsProviders = ()=>{
    const getProductsProvider = ()=>{
        const request = axios({
            method:'GET',
            url:"/products/"
        })
        return trackPromise(request);
    }
    const getProductProvider = ({slug})=>{
        const request = axios({
            method:'GET',
            url:`/products/${slug}/`
        })
        return trackPromise(request);
    }
    const getCategoriesProvider = ()=>{
        const request = axios({
            method:'GET',
            url:"/categories/"
        })
        return trackPromise(request);
    }
    return {
        getProductsProvider,
        getProductProvider,
        getCategoriesProvider
    }
}