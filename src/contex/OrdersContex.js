import React, { createContext, useState } from "react";

export const Order = createContext();

const OrdersProvider = ({ children }) => {
  const [order, setOrder] = useState([]);
  const [quantity, setQuantity] = useState([1]);

  const addOrder = (neworder) => {
    setOrder({ order: { ...neworder }, quantity });
    console.log(order);
  };

  const editQuantity = (newQuantity) => {
    if (newQuantity < 10) setQuantity(newQuantity);
  };

  return (
    <Order.Provider
      value={{ order, quantity, setOrder, addOrder, editQuantity }}
    >
      {children}
    </Order.Provider>
  );
};

export default OrdersProvider;
