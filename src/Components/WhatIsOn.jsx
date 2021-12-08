import React from "react";
import AllBookings from "./AllBookings";
import FilmModel from './utils/Film.model.jsx';

const WhatIsOn = () => {
    const film1 = new FilmModel(
        "5c9e51c24c6ee53ff09d5d01",
        "Test Film 1",
        " Test Film 1 Synopsis",
        "Test Film 1 Cast",
        "Test Film 1 Directors",
        "11:45, 13:30, 17:15, 20:45",
        "2019-05-27T00:00:00.000Z",
        "1",
        "film1Image.jpg"
    );
    const film2 = new FilmModel(
        "5c9e51c24c6ee53ff09d5d02",
        "Test Film 2",
        " Test Film 2 Synopsis",
        "Test Film 2 Cast",
        "Test Film 2 Directors",
        "11:45, 13:30, 17:15, 20:45",
        "2019-10-27T00:00:00.000Z",
        "2",
        "film2Image.jpg"
    );

    return (
        <div>
        <p> This is All Bookings</p>
            <AllBookings schedule = {{film1, film2}}/>
        </div>
    );
};

export default WhatIsOn;