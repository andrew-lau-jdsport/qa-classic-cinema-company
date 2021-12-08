import React from "react";
import Information from "./Information";
import NowShowing from "./NowShowing";

const Home = () => {
    return (
        <div>
        <p> This is Home</p>
            <Information />
            <NowShowing />
        </div>
    );
};

export default Home;