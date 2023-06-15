import React from "react";
import './errorMessage.sass';
import image from './error.jpg';

const ErrorMessage = (props) => {
    return (
        <>
            <img src={image} alt='error'></img>
            <span>Something goes wrong...</span>
        </>
    );
}

export default ErrorMessage;