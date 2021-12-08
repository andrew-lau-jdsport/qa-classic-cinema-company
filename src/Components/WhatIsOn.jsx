import React from "react";
import AllBookings from "./AllBookings";
import FilmModel from './utils/Film.model.jsx';

const WhatIsOn = () => {
    return (
        <div>
        <p> This is All Bookings</p>
            <AllBookings films = {
                [{
                    "_id": "5c9e51c24c6ee53ff09d5d01",
                    "title": "Test Film 1",
                    "synopsis": " Test Film 1 Synopsis",
                    "cast": "Test Film 1 Cast",
                    "directors": "Test Film 1 Directors",
                    "showingTimes": "11:45, 13:30, 17:15, 20:45",
                    "releaseDate": "2019-05-27T00:00:00.000Z",
                    "filmStatus": "1",
                    "img": "film1Image.jpg"
                },
                {
                    "_id": "5c9e51c24c6ee53ff09d5d02",
                    "title": "Test Film 2",
                    "synopsis": " Test Film 2 Synopsis",
                    "cast": "Test Film 2 Cast",
                    "directors": "Test Film 2 Directors",
                    "showingTimes": "11:45, 13:30, 17:15, 20:45",
                    "releaseDate": "2019-10-27T00:00:00.000Z",
                    "filmStatus": "2",
                    "img": "film2Image.jpg"
                }]}/>
        </div>
    );
};

export default WhatIsOn;