import { Link } from "react-router-dom";
import "./ReservedPage.css";
import { useContext } from "react";
import { Order } from "../../contex/OrdersContex";

export const ReservedPage = () => {
  const { order } = useContext(Order);

  return (
    <>
      <h1>Reserved</h1>
      <p>
        You just reserved: {order.order.description} in {order.order.location}
      </p>
      <p>Guests: {order.quantity}</p>

      <Link to={"/"}>Back to home </Link>
    </>
  );
};
