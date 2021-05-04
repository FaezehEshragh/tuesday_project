import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Product(props) {
  const [count, setCount] = useState(0);

  function handleAddition() {
    setCount(count + 1);
  }
  function handleSubtraction() {
    setCount(count - 1);
  }
  return (
    <div className="container-sm p-3 my-2 border">
      <img src={props.product.image} width="50px" alt={props.product.title} />
      <strong>{props.product.title}</strong>
      <p>{props.product.description}</p>
      <p>{count}</p>
      <button
        className="btn btn-success"
        type="submit"
        onClick={handleAddition}
      >
        +
      </button>
      <button
        className="btn btn-warning"
        type="submit"
        onClick={handleSubtraction}
        disabled={count === 0 ? true : false}
      >
        -
      </button>
      <br />
    </div>
  );
}

export default Product;
