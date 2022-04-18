import React from "react";
import { useNavigate } from "react-router-dom";
import "./Package.css";

const Package = (props) => {
  const { id, name, picture, desc, price } = props.pg;
  const navigate = useNavigate();
  const navigateToPackageDetail = (id) => {
    navigate(`/package/${id}`);
  };

  return (
    <div>
      <div className="single-card shadow-lg mx-auto my-5 ">
        <div>
          <img className="card-img" src={picture} alt="" />
        </div>
        <div>
          <div className="card-info px-3">
            <p className="fs-4 fw-bold">{name}</p>
            <p>
              Price: {price} <small>BDT</small>
            </p>
            <p>{desc.length < 20 ? desc.slice(0, 20) : desc }</p>
            <button
              className="btn btn-primary"
              onClick={() => navigateToPackageDetail(id)}
            >
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Package;
