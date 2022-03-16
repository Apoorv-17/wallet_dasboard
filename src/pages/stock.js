import React from "react";

import Layout from "../components/Layout";
import StripeCheckOutButton from "../components/stripe-button";

export default function stock() {
  return (
    <Layout>
      <div className="welcome">
        <h1>Stock</h1>
        <p>Local Warehouse</p>
      </div>

      <div className="dash-container">
        <div className="dash-card">
          <div>
            <h1>Total Inventory</h1>
            <p>Local Warehouse</p>
            <p className="num">42069</p>
          </div>
        </div>

        <div className="dash-card">
          <div>
            <h1>Products</h1>
            <p>Listed in Inventory</p>
            <p className="num">420</p>
          </div>
        </div>
      </div>

      <h1>Inventory List</h1>
      <ul className="stock-list">
        <li>
          <h2>Product Name</h2>
          <p className="price">$69</p>
          <p className="qty">420</p>
        </li>
        <li>
          <h2>Product Name</h2>
          <p className="price">$69</p>
          <p className="qty">420</p>
        </li>
        <li>
          <h2>Product Name</h2>
          <p className="price">$69</p>
          <p className="qty">420</p>
        </li>
        <li>
          <h2>Product Name</h2>
          <p className="price">$69</p>
          <p className="qty">420</p>
        </li>
      </ul>
      <StripeCheckOutButton price={100} />
      <div className="payment-warning">
        Please use the follwing test credit card for payments:
        <br />
        4242 4242 4242 4242 - Exp: 01/23 - CVV: 123
      </div>
    </Layout>
  );
}
