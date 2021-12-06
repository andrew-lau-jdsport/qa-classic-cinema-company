import React from "react";
import PropTypes from 'prop-types';

const Banner = ({name}) => {
    return (
        <>
            <p>{name}</p>
            <img src='' alt="what's on"/>
        </>
    );
};

Banner.propTypes = {
    name: PropTypes.string
}

export default Banner;
