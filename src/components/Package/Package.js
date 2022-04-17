import React from 'react';
import './Package.css';

const Package = (props) => {   
    const {name, picture, desc,price } = props.pg;

    return (
      <div className="single-card mx-auto bg-slate-100 shadow-2xl relative">
        <img className="card-img" src={picture} alt="" />
        <div className="px-3">
          <p className="text-3xl font-semibold my-4">{name}</p>
          <p className="text-xl">
            Price: {price} <small className="text-slate-500">BDT</small>
          </p>
          <p>{desc}</p>
          <button className="bg-sky-500 py-2 px-20 mx-auto absolute bottom-3 rounded-md text-white font-semibold">
            Details
          </button>
        </div>
      </div>
    );
};

export default Package;