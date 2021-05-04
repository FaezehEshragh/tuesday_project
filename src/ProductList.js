import Product from "./Product";

function ProductList() {
  const products = [
    {
      title: "Cheese",
      description: "200g cheese block",
      image:
        "https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto,w_300/v1580649404/react-tutorial/products/cheese.png",
    },
    {
      title: "Milk",
      description: "1L of milk",
      image:
        "https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto,w_300/v1580649400/react-tutorial/products/milk.png",
    },
  ];
  return (
    <div>
      <Product product={products[0]} />
      <Product product={products[1]} />
    </div>
  );
}

export default ProductList;
