import React from "react";
import { useParams } from 'react-router-dom'

const Film = () => {
    const { id } = useParams();
    
    return (
        <div>
            <p>Book on {id}</p>
        </div>
    );
};

export default Film;
