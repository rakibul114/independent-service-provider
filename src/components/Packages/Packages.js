import React, { useEffect, useState } from "react";
import Package from "../Package/Package";
import './Packages.css';

const Packages = () => {    
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);

  return (
    <div className="container">
      <div>
        <h1 className="text-primary text-center mt-4 fw-bold">TOP PACKAGES</h1>
        <p className="text-center">BEST TRAVEL PACKAGES AVAILABLE</p>
        <hr className="horizon-bar" />
      </div>
      
        <div className="card-design">
          {packages.map((pg) => (
            <Package key={pg.id} pg={pg}></Package>
          ))}
        </div>
      
    </div>
  );
};

export default Packages;
