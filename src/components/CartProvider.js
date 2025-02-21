import { createContext, useState, useContext } from "react";

// item tracking code and context from ChatGPT 
// https://chatgpt.com/share/67b808ed-0d5c-8006-867e-afaaa0959ed1

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [subtotal, setSubtotal] = useState(0.0);

  const addToCart = (item) => {
    setCart((prevCart) => {
      setSubtotal(subtotal + item.price);
      console.log(subtotal);
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        console.log(existingItem.count)
        return prevCart.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, count: cartItem.count + 1 } : cartItem
        );
      } else {
        // add item and set to one
        console.log("first add")
        return [...prevCart, { ...item, count: 1 }];
      }
    });
  };

  const removeFromCart = (item) => {
    console.log("removing");
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      console.log("find done ig")
      if (existingItem && existingItem.count > 0) {
        setSubtotal(subtotal - existingItem.price);
      }
      console.log(subtotal)
      const newCart = prevCart
        .map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, count: cartItem.count - 1 } : cartItem
        )
        .filter((cartItem) => cartItem.count > 0)
      return newCart
   });

  };

  const getCount = (id) => {
    const cartItem = cart.find((cartItem) => cartItem.id === id);
    return cartItem ? cartItem.count : 0;
  };

  const getSubtotal = (id) => {
    return subtotal;
  }

  const clearCart = () => {
    setCart([]);
    setSubtotal(0);
  }


  const cartToString = () => {
    let txt = "Order Placed!\n";
    txt += cart.map(item => item.count + " " + item.title).join(", ");
    return txt
  }

  return (

    <CartContext.Provider value={{ cartToString, addToCart, removeFromCart, subtotal, getCount, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
