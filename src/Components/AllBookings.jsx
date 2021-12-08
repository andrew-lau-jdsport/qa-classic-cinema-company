import React from "react";
import Booking from './Booking.jsx';
import FilmModel from './utils/Film.model.jsx';

const AllBookings = ({films}) => {
    const populateTable = () => {
        if (films?.length > 0) {
            return films.map(currentFilm => {
                const { img, title, pg, description, times, _id } = currentFilm;
                const film = new FilmModel(img, title, pg, description, times, _id);
                return 
                    <td>
                        <p>film</p>
                        <Booking film={film} key={film._id} />
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
                <tbody>
                    {populateTable()}
                </tbody>
            </table>
        </div>
    );
};

export default AllBookings;