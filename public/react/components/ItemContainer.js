import React, { useState } from "react";
import { Item } from "./Item";
import banner from "./assets/banner.jpg";

export const ItemContainer = (props) => {
  const { onAdd } = props; // props.onAdd

  return (
    <>
      <div className="banner-img">
        <div className="banner-text">
          <h1>Products</h1>
        </div>
      </div>
      <div className="item-container">
        {props.items.map((item, idx) => {
          return <Item onAdd={onAdd} item={item} key={idx} />;
        })}
      </div>
    </>
  );
};
