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
            <img className="image" src={product.img} alt={product.name} />
            <h2>{product.name}</h2>
            <h3>Price: {product.price}</h3>
            <p className="truncate">{product.description}</p>
            <div className="AddedItems">
              <span className="Span">{product.category}</span>
              <Add />
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Card;
