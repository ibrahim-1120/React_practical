import React from "react";
import "./navbar.css"
import { Flame, Grid2X2, Headset, } from "lucide-react";

export default function nNavbar() {
    return (
        <div className="navbar">
            <section>
                <div className="container">
                    {/* dissplay flex */}
                    <div className="btn">
                        <button class=" button"> <Grid2X2 /> Browse all catagery</button>
                    </div>
                    <div className="ico">
                        <Flame />
                    </div>
                    <div className="eng">
                        <ul>
                            <li>Hot deals</li>
                        </ul>
                    </div>
                    <div className="name">
                        <ul>
                            <li><a href=""> Home</a></li>
                            <li>About</li>
                            <li>Shop</li>
                            <li>Venders</li>
                            <li>Mega menu</li>
                            <li>Blog</li>
                            <li>Pages</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="call">
                        <Headset size={40} />
                    </div>
                    <div className="Number">
                        <ul>
                            <li><a href="">1900 - 888</a></li>
                            <li>24/7 Support center</li>
                        </ul>
                    </div>

                </div>
            </section>

        </div>
    );
}