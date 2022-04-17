import React from 'react';
import './Package.css';

const Package = (props) => {   
    const {name, picture, desc, price } = props.pg;

    return (
      <div className="single-card">
        <div>
          <img className="card-img" src={picture} alt="" />
          <div>
            <p>{name}</p>
            <p>
              Price: {price} <small>BDT</small>
            </p>
            <p>{desc}</p>
            <button>Details</button>
          </div>
        </div>
      </div>
    );
};

export default Package;