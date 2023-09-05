import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [quantity, setQuantity] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const cartLength = cartItems?.length;

  return (
    <CartContext.Provider
      value={{
        quantity,
        setQuantity,
        cartItems,
        setCartItems,
        cartLength,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
