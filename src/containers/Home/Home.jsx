import React from "react";
import { Col, Row } from "antd";
import { useEffect, useState } from "react";
import Product from "../../components/Product/Product";
import "./Home.scss";
const data = [
  {
    id: 1,
    title: "Quần áo",
    img:
      "https://sites.google.com/site/hinhanhdep24h/_/rsrc/1436687439788/home/hinh%20anh%20thien%20nhien%20dep%202015%20%281%29.jpeg",
    price: 100,
  },
  {
    id: 2,
    title: "Ấm chén",
    img:
      "https://znews-photo.zadn.vn/w660/Uploaded/kbd_bcvi/2019_11_23/5d828d976f24eb1a752053b5_thumb.jpg",
    price: 200,
  },
  {
    id: 3,
    title: "Quần áo",
    img:
      "https://sites.google.com/site/thietkewebtaihanoi/_/rsrc/1480308136221/kien-thuc-web/tim-kiem-hinh-anh-dep-cho-giao-dien-website/T%C3%ACm%20ki%E1%BA%BFm%20h%C3%ACnh%20%E1%BA%A3nh%20%C4%91%E1%BA%B9p%20cho%20giao%20di%E1%BB%87n%20website-1.jpg",
    price: 300,
  },
  {
    id: 4,
    title: "Máy bay",
    img: "https://hanoimoi.com.vn/Uploads/tuandiep/2018/4/8/1(1).jpg",
    price: 40,
  },
];

function Home(props) {
  const [list, setList] = useState([]);
  //call api xong. thì setList([ data là dữ liệu từ api ])
  useEffect(() => {
    console.log("chạy vào đây ");
    //call api => trả về được dữ liệu là data
    setList(data);
  }, []);
  return (
    <div>
      <div className="main">
        <Row gutter={[16, 16]}>
          {list &&
            list.map((element) => (
              <Col span={6}>
                <Product data={element} />
              </Col>
            ))}
        </Row>
      </div>
    </div>
  );
}

export default Home;
