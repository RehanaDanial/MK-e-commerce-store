import React, { useContext } from "react";
// import { CartContext } from "./CartContext";
import { CiShoppingCart } from "react-icons/ci";


const Carticon = () => {
  const { cart } = useContext(CartContext);

  if (!cart) {
    return null;
  }

  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="cart-icon">
      <span role="img" aria-label="cart">
      <CiShoppingCart />

      </span>
      {totalQuantity > 0 && <span className="cart-count">{totalQuantity}</span>}
    </div>
  );
};

export default Carticon;
