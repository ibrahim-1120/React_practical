import React from 'react'
import "./box.css"
import apple from './images/apple.png';
import black_plum from "./images/black_plum.png"
import custard_apple from "./images/custard_apple.png"
import headphone from "./images/headphone.png"
import snacks from "./images/snacks.png"
import stawberry from "./images/stawberry.png"
import tea_coffee from "./images/tea_coffee.png"
import vegetable from "./images/vegetable.png"
export default function Box() {
    return (
        <div className='fix'>
            <div className='box'>
                <div className='box1'>
                    {/* apple */}
                    <img src={apple} alt="" />
                    <h3>Red Apple</h3>
                    <p>26 Item</p>
                </div>
                {/* snacks */}
                <div className='box1'>
                    <img src={snacks} alt="" />
                    <h3>Snacks</h3>
                    <p>26 Item</p>
                </div>
                {/* vegetable */}
                <div className='box1'>
                    <img src={vegetable} alt="" />
                    <h3>Vegetable</h3>
                    <p>26 Item</p>
                </div>
                {/* stawberry */}
                <div className='box1'>
                    <img src={stawberry} alt="" />
                    <h3>Stawberry</h3>
                    <p>26 Item</p>
                </div>
                {/* black_plum */}
                <div className='box1'>
                    <img src={black_plum} alt="" />
                    <h3>Black Plum</h3>
                    <p>26 Item</p>
                </div>
                {/* custard_apple */}
                <div className='box1'>
                    <img src={custard_apple} alt="" />
                    <h3>Custard Apple</h3>
                    <p>26 Item</p>
                </div>
                {/* tea_coffee */}
                <div className='box1'>
                    <img src={tea_coffee} alt="" />
                    <h3>Tea Coffee</h3>
                    <p>26 Item</p>
                </div>
                {/* headphone */}
                <div className='box1'>
                    <img src={headphone} alt="" />
                    <h3>Headphone</h3>
                    <p>26 Item</p>
                </div>
            </div>

        </div>
    );
}
