import React from "react";
import "./header.css"
import { Globe } from "lucide-react";

export default function Header() {
    return (
        <div className="header">
            <header>
                <div className="container">
                    {/* display flex */}
                    <div className="navbar">
                        <ul>
                            <li>About Us</li>
                            <li>My Account</li>
                            <li>Wish List</li>
                            <li>Order Tracking</li>
                        </ul>
                    </div>
                    <p className="par">Get great discount upto 50%  off<a href=""> view detail</a></p>
                    <div className="call">
                        <p>Need help? call us now
                            <a href="">+1800 800
                            </a>
                        </p>
                    </div>
                    <div className="ico">
                        <Globe />
                    </div>
                    <div className="eng">
                        <ul>
                            <li>English</li>
                            <li>USD</li>
                        </ul>
                    </div>
                </div>
            </header >
        </div >
    );
}