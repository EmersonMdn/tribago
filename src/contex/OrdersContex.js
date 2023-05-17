import React, { createContext, useState } from "react";

export const Order = createContext();

const OrdersProvider = ({ children }) => {
  const [order, setOrder] = useState([]);

  const addOrder = () => {
    console.log("Adding order");
  };

  return (
    <Order.Provider value={{ order, setOrder, addOrder }}>
      {children}
    </Order.Provider>
  );
};

export default OrdersProvider;
