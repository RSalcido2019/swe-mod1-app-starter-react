import React from "react";
import { Link } from "react-router-dom";
import CartSideBar from "./CartSideBar";

export default function Navbar(props) {
  const { cartItems, onAdd, onRemove } = props;

  return (
    <nav className="navbar">
      <section className="navbar-left" aria-label="shopping tabs">
        <h2 className="nav-item">
          <Link to="/plants">Plants</Link>
        </h2>
        <h2 className="nav-item">
          <Link to="/coffees">Coffee-Beans</Link>
        </h2>
      </section>
      <section className="navbar-center" aria-label="home tab">
        <h2 className="nav-item">
          <a href="#">Plant Shed</a>
        </h2>
      </section>
      <section className="navbar-right" aria-label="cart tab">
        <h2 className="nav-item">
          <CartSideBar
            cartItems={cartItems}
            onAdd={onAdd}
            onRemove={onRemove}
          ></CartSideBar>
        </h2>
      </section>
    </nav>
  );
}
