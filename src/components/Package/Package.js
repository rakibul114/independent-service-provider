import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Package.css';

const Package = (props) => {   
  const { id, name, picture, desc, price } = props.pg;
  const navigate = useNavigate();
  const navigateToPackageDetail = id => {
    navigate(`/package/${id}`);
  };

    return (
      <div className="single-card shadow-lg mx-auto my-5">
        <div>
          <img className="card-img" src={picture} alt="" />
          <div className='px-3'>
            <p className='fs-4 fw-bold'>{name}</p>
            <p>
              Price: {price} <small>BDT</small>
            </p>
            <p>{desc}</p>
            <button onClick={() => navigateToPackageDetail(id)}>Details</button>
          </div>
        </div>
      </div>
    );
};

export default Package;