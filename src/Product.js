import React, { useState } from "react";

function Product(props) {
  const [count, setCount] = useState(0);

  function handleAddition() {
    setCount(count + 1);
  }
  function handleSubtraction() {
    setCount(count - 1);
  }
  return (
    <div>
      <img src={props.product.image} width="50px" />
      <strong>{props.product.title}</strong>
      <span>{props.product.description}</span>
      <span>{count}</span>
      <button onClick={handleAddition}>+</button>
      <button onClick={handleSubtraction} disabled={count === 0 ? true : false}>
        -
      </button>
    </div>
  );
}

export default Product;
