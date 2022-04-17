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
      <div className="single-card">
        <div>
          <img className="card-img" src={picture} alt="" />
          <div>
            <p>{name}</p>
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