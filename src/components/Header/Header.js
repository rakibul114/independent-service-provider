import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="flex justify-around text-2xl bg-slate-100 py-8 fixed w-full z-50 top-0">
      <h1 className="font-bold text-3xl">Travel BD</h1>
      <div>
        <Link className="ml-6" to="/home">
          Home
        </Link>
        <Link className="ml-6" to="/packages">
          Packages
        </Link>
        <Link className="ml-6" to="/about">
          About
        </Link>
      </div>
    </nav>
  );
};

export default Header;
