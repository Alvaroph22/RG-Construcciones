import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import { useReducers } from "../../models";

export const useStore = ()=>{
    const reducers = useReducers();

    const persistReduce = persistReducer(
        {
            key: "root",
            storage: storage,
            whitelist: ["bar", "general", "tools"],
        },
        reducers
    );

     const store = configureStore({
        reducer: persistReduce,
        preloadedState: {},
        devTools: process.env.NODE_ENV === "development",
        middleware: [thunk],
    });

     const persist = persistStore(store);
     return {
         store, persist
     }

}
