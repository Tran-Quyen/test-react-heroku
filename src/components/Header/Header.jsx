import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div className="header">
      <div className="container">
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        ></link>
        <div className="logo">
          <Link to="/">Logo</Link>
        </div>
        <div className="menu">
          <ul>
            <li>
              <Link to="/">Trang chủ</Link>
              <Link to="/detail">Chi tiết</Link>
              <Link to="/">Giới thiệu</Link>
              <Link to="/">Giỏ hàng</Link>
            </li>
          </ul>
        </div>

        <div className="search-bar">
          <table className="el-container">
            <tr>
              <td>
                <input type="text" placeholder="Search" className="search" />
              </td>
              <td>
                <Link href="/">
                  <i className="material-icons">search</i>
                </Link>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Header;
