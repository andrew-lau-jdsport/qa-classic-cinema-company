import React from "react";
import PropTypes from 'prop-types';
import { Link} from 'react-router-dom';
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
            <td><Link to={`/book/${_id}`}>Book</Link></td>
        </tr>
    );
};

Booking.propTypes = {
    schedule: PropTypes.instanceOf(FilmModel)
}


export default Booking;