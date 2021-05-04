import "./App.css";
import React, { useState } from "react";
import ProductList from "./ProductList";

function App() {
  const [authorized, setAutorized] = useState(false);

  let rest = "Hello";
  if (authorized) {
    rest = (
      <div>
        <ProductList />
        <button onClick={logout}>Logout</button>
      </div>
    );
  } else {
    rest = (
      <div>
        <p>Please Login!</p>
        <button onClick={login}>Login</button>
      </div>
    );
  }

  function login() {
    setAutorized(true);
  }

  function logout() {
    setAutorized(false);
  }

  return <div>{rest}</div>;
}

export default App;
