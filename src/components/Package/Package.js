import React from 'react';
import './Package.css';

const Package = (props) => {   
    const {name, picture, desc,price } = props.pg;

    return (
      <div className="single-card mx-auto bg-slate-100 ">
        <img className="card-img" src={picture} alt="" />
        <p className="text-3xl font-semibold ">{name}</p>
        <p className="text-xl">
          Price: {price} <small className="text-slate-500">BDT</small>
        </p>
      </div>
    );
};

export default Package;