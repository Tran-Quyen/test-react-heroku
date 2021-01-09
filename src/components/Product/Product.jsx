import React from "react";
import "./Product.scss";

function Product(props) {
  const { data } = props;
  return (
    <div className="product">
      <div className="card">
        <div className="container">
          <img src={data.img} alt="" className="img" />
        </div>

        <div className="content-container">
          <h3 className="title">{data.title}</h3>
          <h3 className="price">{data.price} vnd</h3>
        </div>
      </div>
    </div>
  );
}

export default Product;
