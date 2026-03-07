import { createContext, useState } from "react";
// استيراد الصور لكي تظهر المنتجات الافتراضية
import img4 from "../assets/images/img4.png";
import img5 from "../assets/images/img5.png";
import img6 from "../assets/images/img6.png";

export const CartContext = createContext();

export function CartProvider({ children }) {
  // هنا نضع المنتجات التي كانت موجودة أصلاً كبيانات أولية
  const [cartItems, setCartItems] = useState([
    { id: 101, name: "Dell Optiplex 9020 Small Form PC", price: 2.51, quantity: 1, image: img4, rating: 5 },
    { id: 102, name: "HP 24 All-in-One PC, Intel Core i3", price: 1.51, quantity: 1, image: img5, rating: 4 },
    { id: 103, name: "Gateway 23.8\" All-in-One Desktop", price: 3.51, quantity: 1, image: img6, rating: 5 }
  ]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, amount) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeItem, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
}