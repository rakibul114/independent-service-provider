import React from 'react';
import './PageNotFound.css';
import page404 from '../../images/404.png';

const PageNotFound = () => {
    return (
        <div>
            <img className='page-not-found' src={page404} alt="" />
        </div>
    );
};

export default PageNotFound;