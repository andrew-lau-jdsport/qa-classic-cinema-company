import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({ handleClose, message }) => {

    // const showHideClassName = message ? `modal display-block` : `modal display-none`;

    return (
        <div>
            <section>
                <h3>CCC</h3>
                <p>{message}</p>
                <button onClick={handleClose}>Close</button>
            </section>
        </div>
    );
};

Modal.propTypes = {
    handleClose: PropTypes.func.isRequired,
    message: PropTypes.string
}

export default Modal;
