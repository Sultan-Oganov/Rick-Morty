import React from 'react';
import '../../../styles/Spiner.scss';
import loading from '../../../images/spiner.gif';

const Spiner = () => {
    return (
        <div className="loading">
            <img className="loading__img" src={loading} alt="Loading..." />
        </div>
    );
};

export default Spiner;