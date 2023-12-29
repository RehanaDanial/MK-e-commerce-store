




import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "./CartContext";
import Addbutton from "./Addbutton";

const Addtocartpage = () => {
  const { cart, addToCart, removeFromCart, clearCart } =
    useContext(CartContext);
  const [allCart, setAllCart] = useState([]);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setAllCart(cart);
    console.log(cart, "cart 123");
  }, [cart]);

  const handleRemoveItem = (itemId) => {
    console.log(itemId, "itemId");
    removeFromCart(itemId);
  };

  return (
    <>
      <h1>heloocart</h1>
      <div className="product-grid">
        {allCart.map((item, index) => (
          <div key={index} className="product-item">
            <div>
              <img
                src={item?.imgae[0]}
                alt={`Item ${index + 1}`}
                style={{ maxWidth: "100px", maxHeight: "100px", margin: "5px" }}
              />
              <p>{item?.name}</p>
            </div>

            <div className="priceaddcart">
              <p>{item?.price}</p>
              <Addbutton value={item?.quantity} setQuantity={setQuantity} />
              <p>rehanagnsjvhj</p>
              <button className="remove" onClick={() => handleRemoveItem(index)}>
                Remove
              </button>
            </div>
            
          </div>
        ))}
      </div>
    </>
  );
};

export default Addtocartpage;






















