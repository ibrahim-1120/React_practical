import React from 'react'
import { useState } from 'react';

export default function IncrementDecreament() {
    let [Count, Setcount] = useState(0);

    return (
        <div className="main">

            <h1>{Count}</h1>

            <div>
                <button className="btn1" onClick={() => Setcount(Count + 1)}>Increment</button>
                <button className="btn2" onClick={() => Setcount(Count - 1)}>Decrement</button>
            </div>

            <div >
                <button className="btn3" onClick={() => Setcount(0)}>Reset</button>
            </div>
        </div>
    )
}
