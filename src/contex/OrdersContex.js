import React, { createContext, useState } from "react";

export const Order = createContext();

const OrdersProvider = ({ children }) => {
  const [order, setOrder] = useState([]);
  const [quantity, setQuantity] = useState([1]);
  const [userData, setUserData] = useState([]);

  const addOrder = (neworder) => {
    setOrder({ order: { ...neworder }, quantity });
    console.log(order);
  };

  const editQuantity = (newQuantity) => {
    if (newQuantity < 10) setQuantity(newQuantity);
  };

  const getUserData = (data) => {
    setUserData(data);
    console.log(userData);
  };

  return (
    <Order.Provider
      value={{
        order,
        quantity,
        userData,
        setOrder,
        addOrder,
        editQuantity,
        getUserData,
      }}
    >
      {children}
    </Order.Provider>
  );
};

export default OrdersProvider;
