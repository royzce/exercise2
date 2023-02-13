import { useState } from "react";
import "./App.css";
import Checkout from "./components/Checkout";
import Dashboard from "./components/Dashboard";
import NavBar from "./components/NavBar";
import { PRODUCTS_DATA as data } from "./data/products";

function App() {
  const [products, setProducts] = useState(
    data.map((product) => {
      return { ...product, qty: 0 };
    })
  );
  const [toggleButton, setToggleButton] = useState(false);

  const handleToggle = () => {
    setToggleButton(!toggleButton);
  };

  function handleIncrement(id) {
    setProducts(
      products.map((product) => {
        if (product.id === id) {
          return { ...product, qty: product.qty + 1 };
        }
        return product;
      })
    );
  }
  function handleDecrement(id) {
    setProducts(
      products.map((product) => {
        if (product.id === id && product.qty > 0) {
          return { ...product, qty: product.qty - 1 };
        }
        return product;
      })
    );
  }
  function handleRemoveCart(id) {
    setProducts(
      products.map((product) => {
        if (product.id === id && product.qty > 0) {
          return { ...product, qty: 0 };
        }
        return product;
      })
    );
  }

  function handleAddToCart(id) {
    setProducts(
      products.map((product) =>
        product.id === id ? { ...product, qty: 1 } : product
      )
    );
  }
  const content = () => {
    if (toggleButton) {
      return <Checkout products={products} />;
    }
    return (
      <Dashboard
        products={products}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onAddToCart={handleAddToCart}
        onRemoveCart={handleRemoveCart}
      />
    );
  };
  return (
    <>
      <NavBar
        products={products}
        onToggleButton={handleToggle}
        toggleButton={toggleButton}
      />

      {content()}
    </>
  );
}

export default App;
