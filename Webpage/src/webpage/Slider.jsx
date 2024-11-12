import React from 'react'
import "./slider.css"
import slider1 from "./slider1.jpg"
import slider2 from "./slider2.jpg"
import { Send } from 'lucide-react';

export default function Slider() {
    return (
        <div class="container">
            <div class="slide">
                <img src={slider1} alt="" />
                <div class="caption">
                    <h1> Don't miss amazing </h1>
                </div>
                <div className='cap'>
                    <h1>grocery deal</h1>
                </div>
                <div className='c'>
                    <h3> Sign up fot the daily newsletter</h3>
                </div>
                <div className='button'>
                    <div className='button1'>
                        <button className='btn'>
                            Your email address</button>
                        <div className='icon'>
                            <Send />
                        </div>
                    </div>
                    <button className='button2'> subscribe</button>
                </div>
            </div>
            {/* <div class="slide">
                <img src={slider2} alt="" />
            </div> */}
        </div>
    );
}
