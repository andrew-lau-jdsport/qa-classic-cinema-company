import React from "react";
import PropTypes from 'prop-types';
import FilmModel from './utils/Film.model.jsx';

const Booking = ({film}) => {
    const { _id, title, synopsis, cast, directors, showingTimes, releaseDate, filmStatus, img } = film;
    return (
        <tr>
            <td>{img}</td>
            <td>{title}</td>
            <td>{synopsis}</td>
            <td>{cast}</td>
            <td>{directors}</td>
            <td>{showingTimes}</td>
            <td>{releaseDate}</td>
            <td>{filmStatus}</td>
            <td>{img}</td>
        </tr>
    );
};

Booking.propTypes = {
    schedule: PropTypes.instanceOf(FilmModel)
}


export default Booking;