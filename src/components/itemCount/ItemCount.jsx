import React, { useState } from "react";
import StyledItemCount from "./StyledItemCount";
import { StyledOnAdd } from "./StyledItemCount";
import { Link } from "react-router-dom";

import "./styles.css";

function ItemCount(props) {
  const [count, setCount] = useState(parseInt(props.initial));

  return (
    <StyledItemCount>
      <div className="container">
        <button
          className="menos"
          onClick={() => {
            if (count > 1) {
              setCount(count - 1);
            }
          }}
        >
          -
        </button>

        <p>Cantidad: {count} </p>
        <button
          className="mas"
          onClick={() => {
            if (count < props.stock) {
              setCount(count + 1);
            }
          }}
        >
          +
        </button>
      </div>
      <span>Total: {count * props.children}</span>
      <Link
        className="addLink"
        to={`/cart`}
        onClick={() => props.onAdd([props.data, count])}
      >
        <StyledOnAdd>agregar al carrito</StyledOnAdd>
      </Link>
    </StyledItemCount>
  );
}

export default ItemCount;
