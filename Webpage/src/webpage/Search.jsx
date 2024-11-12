import React from "react";
import "./search.css"
import { Heart, RefreshCcw, Search, ShoppingCart, User } from "lucide-react";

export default function search() {
    return (
        <div className="search">
            <section>
                <div className="container">
                    {/* display flex */}
                    <div className="logo">

                        <h1>logo</h1>
                    </div>

                    <div className="btn">
                        <ul>
                            <li><b>All catagery</b></li>
                            <li>Search</li>
                        </ul>
                        {/* <div className="ico">
                            <Search size={15} />
                        </div> */}
                    </div>
                    <div className="location">
                        <select >
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option3</option>
                        </select>
                    </div>
                    <div className="number">
                        {/* recycle */}
                        <div>
                            <div className="shoping">
                                <RefreshCcw className="icon" />
                                <div className="circle">3</div>
                            </div>
                        </div>
                        {/* heart */}
                        <div>
                            <div className="shoping">
                                <Heart className="icon" />
                                <div className="circle">3</div>
                            </div>
                        </div>
                        {/* shoping */}
                        <div>
                            <div className="shoping">
                                <ShoppingCart className="icon" />
                                <div className="circle">3</div>
                            </div>
                        </div>
                    </div>
                    {/* Account */}
                    <div className="acc">
                        <User size={20} />
                    </div>
                    <div className="eng">
                        <ul>
                            <li>Account</li>

                        </ul>
                    </div>

                </div>
            </section>
        </div>
    );
}