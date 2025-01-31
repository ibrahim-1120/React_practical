import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../feactures/counterSlice'


export const store = configureStore({
    reducer: { counter: counterReducer },
});
