import React from "react";
import Header from "./Header"
import Search from "./Search";
import Navbar from "./Navbar"
import Slider from "./Slider"
import Box from "./Box"
// import Data from "./Data.json"


export default function Index() {
    return (
        <div>

            <Header />
            <Search />
            <Navbar />
            <Slider />
            <Box />
        </div>
    );
}

