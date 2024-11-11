import React from 'react'
import "./Home.css"
import reactLogo from './assets/react.svg'

export default function Home() {
    return (
        <>
            <div className='part1'>
                <p>
                    React js
                </p>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>

            <div className='part2'>
                <p>
                    Hello world
                </p>


            </div>


        </>
    )
}
