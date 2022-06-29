import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "./reduxReducers/todo";


// create redux store
export const store = configureStore({
    // you can give multiple reducers like TodoReducer, StatusFilterReducer, etc.
    reducer:{
        todoReducer : TodoReducer,
    },
});

// to get type of this store state.
export type RootStoreState = ReturnType<typeof store.getState>