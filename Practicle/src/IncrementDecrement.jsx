import React, { useState } from 'react'

export default function IncrementDecrement() {
    let [count, setcount] = useState(0);
    return (
        <div >
            <h1 className='font'> Increament Decreament </h1>
            <h1 className='count'>{count}</h1>

            <div >
                <button onClick={() => setcount(count + 1)}> Increament</button>

                <button onClick={() => setcount(count - 1)}> Decreament</button>
            </div>

            <div >
                <button onClick={() => setcount(0)}>
                    Reset
                </button>

            </div>
        </div>
    )
}
