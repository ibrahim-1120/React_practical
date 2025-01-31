import { useDispatch, useSelector } from "react-redux";
import { increament, decreament, increamentByAmount, decreamentByAmount } from './feactures/counterSlice'
import React, { useRef } from 'react'


export default function App() {

    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch()

    const increamentHandeler = () => {
        dispatch(increament())
    }
    const decreamentHandeler = () => {
        dispatch(decreament())
    }

    // const amount = useRef()
    // const increamentByAmountHandeler = () => {
    //     dispatch(increamentByAmount(Number(amount.current.value)))
    //     amount.current.value = ""
    // }
    // const decreamentByAmountHandeler = () => {
    //     dispatch(decreamentByAmount(Number(amount.current.value)))
    //     amount.current.value = ""
    // }



    return (<div >

        <h1 >Counter: {count}</h1>
        <div >
            <Button onClick={() => dispatch(increamentHandeler())}>+</Button>
            <Button onClick={() => dispatch(decreamentHandeler())}>-</Button>
            <Button onClick={() => dispatch(reset())}>
                Reset
            </Button>
        </div>

    </div>




    )
}
