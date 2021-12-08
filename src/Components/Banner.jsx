import React from "react";
import PropTypes from 'prop-types';

const Banner = ({name}) => {
    return (
        <div>
            <p>Banner: {name}</p>
            <img src='' alt="Banner"/>
        </div>
    );
};

Banner.propTypes = {
    name: PropTypes.string
}

export default Banner;
