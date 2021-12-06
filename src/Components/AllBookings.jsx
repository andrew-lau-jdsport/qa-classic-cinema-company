import React from "react";
import Booking from './Booking.jsx';
import ScheduleModel from './utils/Schedule.model.jsx';

const AllBookings = ({schedules}) => {
    const populateTable = () => {
        if (schedules?.length > 0) {
            return schedules.map(currentSchedule => {
                const { img, title, pg, description, times, _id } = currentSchedule;
                const schedule = new ScheduleModel(img, title, pg, description, times, _id);
                return 
                    <td>
                        <Booking schedule={schedule} key={schedule._id} />
                    </td>
                    ;
            });
        }

        return (
            <></>
        );
    }

    return (
        <div className="row">
            <h3>Bookings</h3>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>{populateTable()}</tbody>
            </table>
        </div>
    );
};

export default AllBookings;