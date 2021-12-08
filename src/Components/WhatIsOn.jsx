import React, { useState, useEffect } from "react";
import AllBookings from "./AllBookings";
import FilmModel from './utils/Film.model.jsx';
import axios from 'axios';
import Modal from './utils/Modal';

const MOCKDATAURL = 'http://localhost:4000/allFilms';

const WhatIsOn = () => {
    const [films, setFilms] = useState({});
    const [getError, setGetError] = useState(``);

    /*
    const films = [
        {
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
        }
    ];
    */
    
    useEffect(() => {
        const getData = async () => {
            setFilms(await getFilms());
        }
        getData();
      }, []);
    
    const getFilms = async () => {
        try {
          const res = await axios.get(MOCKDATAURL);
          return res.data.length? ({data: res.data}) : ({ error: `There are no films stored` });
        }
        catch (e) {
            setGetError(`Data not available from server: ${e.message}`)
            return ({ error: `Data not available from server: ${e.message}` });
        }
    };
    
    return (
        <>
            {getError && <Modal handleClose={() => setGetError(``)} message={getError} />}
            <div>
            <p> This is All Bookings</p>
                <AllBookings films = {films.data}/>
            </div>
        </>
    );
};

export default WhatIsOn;