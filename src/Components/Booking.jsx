import React from "react";
import PropTypes from 'prop-types';
import ScheduleModel from './utils/Schedule.model.jsx';

const Booking = ({schedule}) => {
    const { img, title, pg, description, times, _id } = schedule;
    return (
        <table>
        <tbody>
            <tr>
                <td>{img}</td>
                <td>{title}</td>
                <td>{pg}</td>
                <td>{description}</td>
                <td>{times}</td>
            </tr>
        </tbody>
        </table>
    );
};

Booking.propTypes = {
    schedule: PropTypes.instanceOf(ScheduleModel)
}


export default Booking;