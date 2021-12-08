import React from "react";
import AllBookings from "./AllBookings";
import ScheduleModel from './utils/Schedule.model.jsx';

const WhatIsOn = () => {
    const schedule1 = new ScheduleModel(
        "film1Image.jpg", 
        "Test Film 1",
        " Test Film 1 Synopsis", 
        "Test Film 1 Cast", 
        "11:45, 13:30, 17:15, 20:45",
        "5c9e51c24c6ee53ff09d5d01");
    const schedule2 = new ScheduleModel(
        "film1Image.jpg", 
        "Test Film 1",
        " Test Film 1 Synopsis", 
        "Test Film 1 Cast", 
        "11:45, 13:30, 17:15, 20:45",
        "5c9e51c24c6ee53ff09d5d01");
    return (
        <div>
        <p> This is All Bookings</p>
            <AllBookings schedule = {{schedule1, schedule2}}/>
        </div>
    );
};

export default WhatIsOn;