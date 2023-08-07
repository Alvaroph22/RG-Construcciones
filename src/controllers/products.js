import {useProductsActions} from "../api";
import {useAppDispatch, useAppSelector} from "../config/redux/hooks";
import {useEffect} from "react";

const useProducts = () => {
    const {getCategoriesAction,getProductsAction,addToCartAction} = useProductsActions();
    const dispatch = useAppDispatch();
    const products = useAppSelector((state)=>state.products)
    useEffect(()=>{
        dispatch(getCategoriesAction());
        dispatch(getProductsAction());
    },[])

    const addToCart =(item)=>{
        dispatch(addToCartAction(item))
    }
  return{
      addToCart,
      products,
  }
}
export default useProducts