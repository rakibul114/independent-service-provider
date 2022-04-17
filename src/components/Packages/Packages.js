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
        <h1 className="">TOP PACKAGES</h1>
        <p>BEST TRAVEL PACKAGES AVAILABLE</p>
        <hr />
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
