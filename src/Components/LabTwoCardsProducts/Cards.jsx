import React, { Component } from "react";
import { products } from "./Proudcts";
import "./Style.css";
import Add from "../AddComponentForLabTwo/Add";

class Card extends Component {
  render() {
    return (
      <div className="Back">
        {products.map((product, index) => (
          <div key={index} className="Boddy">
            <img src={product.img} alt={product.name} />
            <Add />
            <h2>{product.name}</h2>
            <h3>Price: {product.price}</h3>
            <p className="truncate">{product.description}</p>
            <div className="AddedItems">
              <span className="Span">Category: {product.category}</span>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Card;
