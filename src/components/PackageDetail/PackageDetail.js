import React from 'react';
import { Link, useParams } from 'react-router-dom';

const PackageDetail = () => {
    const { packageId } = useParams();
    return (
      <div>
        <h2>Package Id: {packageId} </h2>
        <div className='text-center my-5'>
          <Link to="/checkout">
            <button className="btn btn-primary">Proceed Checkout</button>
          </Link>
        </div>
      </div>
    );
};

export default PackageDetail;