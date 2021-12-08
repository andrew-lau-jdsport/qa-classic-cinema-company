import React, { useState } from "react";
import PropTypes from 'prop-types';
import ScheduleModel from "./utils/Schedule.model";

const JoinClubForm = (submiteAction, personal) => {
    const [title, setTitle] = useState(``);
    const [firstName, setFirstName] = useState(``);
    const [lastName, setLastName] = useState(``);
    const [email, setEmail] = useState(``);
    const [phone, setPhone] = useState(``);
    const [dateOfBirth, setDateOfBirth] = useState(null);
    const [gender, setGender] = useState(``);

    const handleSubmit = event => {
        event.preventDefault();
        // submitAction(title, firstName, lastName, email, phone, dateOfBirth, gender);
        setTitle(``);
        setFirstName(``);
        setLastName(``);
        setEmail(``);
        setPhone(``);
        setDateOfBirth(null);
        setGender(``);
    }

    return (
        <form onSubmit={handleSubmit}>
        <div>
            <label>Title</label>
            <input
                type="text"
                name="title"
                value={title}
                onChange={event => setTitle(event.target.value)}
            />
        </div>
        <div>
            <label>Name</label>
            <input
                type="text"
                name="firstName"
                value={firstName}
                onChange={event => setFirstName(event.target.value)}
            />
            <input
                type="text"
                name="lastName"
                value={lastName}
                onChange={event => setLastName(event.target.value)}
            />
        </div>
        <div>
            <label>Email</label>
            <input
                type="email"
                name="email"
                value={email}
                onChange={event => setEmail(event.target.value)}
            />
        </div>
        <div>
            <label>Phone</label>
            <input
                type="text"
                name="phone"
                value={phone}
                onChange={event => setPhone(event.target.value)}
            />
        </div>
        <div>
            <label>Date of birth</label>
            <input
                type="date"
                name="dateOfBirth"
                value={dateOfBirth}
                onChange={event => setDateOfBirth(event.target.value)}
            />
        </div>
        <div>
            <label>Gender</label>
            <input
                type="radio"
                name="gender"
                value="Female"
                onChange={event => setGender(event.target.value)}
            />
             <label for="female">Female</label>
             <input
                type="radio"
                name="gender"
                value="Male"
                onChange={event => setGender(event.target.value)}
            />
             <label for="male">Male</label>
        </div>
    </form>
    );

};

JoinClubForm.propTypes = {
    submitAction: PropTypes.func.isRequired,
    personal: PropTypes.instanceOf(ScheduleModel)
}

export default JoinClubForm;