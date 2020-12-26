import React from 'react';
import Img from 'gatsby-image';

function ProductItem({ title, price, image }) {
  return (
    <div className="col-10 col-sm-8 col-md-6 col-lg-4 my-3 mx-auto">
      <div className="card" style={{ minHeight: '100%' }}>
        <Img fluid={image.fluid} className="card-img-top" />
        <div className="card-body text-center">
          <h6>{title}</h6>
          <h6>${price}</h6>
          <button className="btn btn-yellow mt-3 text-capitalize">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
