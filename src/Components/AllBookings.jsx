import React from "react";
import Booking from './Booking.jsx';
import FilmModel from './utils/Film.model.jsx';

const AllBookings = ({films}) => {
    const populateTable = () => {
        if (films?.length > 0) {
            return films.map(currentFilm => {
                const {_id, title, synopsis, cast, directors, showingTimes, releaseDate, filmStatus, img} = currentFilm;
                const film = new FilmModel(_id, title, synopsis, cast, directors, showingTimes, releaseDate, filmStatus, img);
                return <Booking film={film} />;
            });
        }

        return (
            <tr>
                <td>No Films Showing</td>
            </tr>
        );
    }

    return (
        <div className="row">
            <h3>Bookings</h3>
            <table>
                <tbody>
                    {populateTable()}
                </tbody>
            </table>
        </div>
    );
};

export default AllBookings;