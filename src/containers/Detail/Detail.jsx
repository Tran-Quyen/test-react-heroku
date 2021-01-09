import React, { useState } from "react";
import "./Detail.scss";

function Detail(props) {
  const [products] = useState([
    {
      _id: 1,
      title: "Nike Shoes",
      src: [
        "https://www.upsieutoc.com/images/2020/06/27/img1.jpg",
        "https://www.upsieutoc.com/images/2020/06/27/img2.jpg",
        "https://www.upsieutoc.com/images/2020/06/27/img3.jpg",
        "https://www.upsieutoc.com/images/2020/06/27/img4.jpg",
      ],
      description: "Mẫu Giày Thể Thao Nam Phong Cách Trẻ Trung",
      content:
        "Dành cho các bạn nam, đủ mọi loại size, thoáng mát, dễ chịu, bền, đẹp.",
      price: 23,
      colors: ["red", "black", "crimson", "teal"],
      count: 1,
      index: 0,
    },
  ]);

  const [bigImg, setBigImg] = useState(products[0].src[0]);

  return (
    <div className="product-detail">
      {products.map((item) => (
        <div className="details" key={item._id}>
          <div className="big-img">
            <img src={bigImg} alt="" />
          </div>

          <div className="box">
            <div className="row">
              <h2>{item.title}</h2>
              <span>${item.price}</span>
            </div>

            <div className="colors">
              {item.colors.map((color, index) => (
                <button style={{ background: color }} key={index}></button>
              ))}
            </div>

            <p>{item.description}</p>
            <p>{item.content}</p>

            <div className="thumb">
              {item.src.map((img, index) => (
                <img
                  src={img}
                  alt=""
                  key={index}
                  onClick={() => {
                    setBigImg(img);
                  }}
                  className={img === bigImg ? "active" : ""}
                />
              ))}
            </div>
            <button className="cart">Add to cart</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Detail;
