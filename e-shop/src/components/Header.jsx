import React from "react";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header_logo">
        <StorefrontOutlinedIcon fontSize="large" className="header_logoImage" />

        <h2 className="header_logoTitle">E-Shop</h2>
      </div>
      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchOutlinedIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <div className="nav_item">
          <span className="nav_itemLineOne">Hello Guest</span>
          <span className="nav_itemLineTwo">Sign In</span>
        </div>
        <div className="nav_item">
          <span className="nav_itemLineOne">Your</span>
          <span className="nav_itemLineTwo">Shop</span>
        </div>
        <div className="nav_item">
          <ShoppingBasketOutlinedIcon className="nav_itemBasket" />
          <span className="nav_itemLineTwo nav_basketCount">0</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
