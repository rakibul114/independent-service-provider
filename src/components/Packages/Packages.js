import React, { useEffect, useState } from "react";
import Package from "../Package/Package";

const Packages = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);

  return (
    <div>
      <div className="mb-6 mt-36">
        <h1 className="text-3xl text-center">TOP PACKAGES</h1>
        <p className="text-2xl text-center">BEST TRAVEL PACKAGES AVAILABLE</p>
        <hr className="mt-2 mb-7 w-14 mx-auto border-2 rounded-md" />
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-x-10 lg:gap-x-0  mb-20">
        {packages.map((pg) => (
          <Package key={pg.id} pg={pg}></Package>
        ))}
      </div>
    </div>
  );
};

export default Packages;
