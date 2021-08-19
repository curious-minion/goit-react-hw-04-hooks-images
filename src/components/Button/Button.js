import React from 'react';
import PropTypes from 'prop-types';
import { button } from './Button.module.css';

export default function Button({ onClick }) {
   
    return (
        <div className={button} type="button" onClick={onClick}>Load more</div>
    );
};


Button.propTypes = {
    onClick: PropTypes.func.isRequired
};

