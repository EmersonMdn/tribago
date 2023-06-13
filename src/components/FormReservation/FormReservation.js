import React, { useState } from "react";
import { Order } from "../../contex/OrdersContex";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export const FormReservation = () => {
  const { order, getUserData } = useContext(Order);
  const navegate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");

  const [steps, setSteps] = useState(0);

  const handleReserved = () => {
    navegate(`/reserved`);
  };

  const usernameHandle = (e) => {
    setUsername(e.target.value);
  };
  const emailHandle = (e) => {
    setEmail(e.target.value);
  };
  const idHandle = (e) => {
    setId(e.target.value);
  };

  const getUser = (e) => {
    e.preventDefault();

    const user_order = {
      username,
      email,
      id,
    };
    getUserData(user_order);
    setSteps(1);
  };

  return (
    <div className="reservation-main">
      <div className="form-reservation">
        {steps === 0 && (
          <form onSubmit={getUser} className="form-container-reservation">
            <input
              type="text"
              name="username"
              className="form-name"
              placeholder="Reservation Name"
              onChange={usernameHandle}
              required
            />
            <input
              type="email"
              name="email"
              className="form-name"
              placeholder="Email"
              onChange={emailHandle}
              required
            />
            <input
              name="id"
              type="text"
              className="form-name"
              placeholder="DNI"
              onChange={idHandle}
              required
            />

            <button className="btn btn-next">
              <i className="fa-solid fa-forward"></i>
            </button>
          </form>
        )}
        {steps === 1 && (
          <form onSubmit={getUser} className="form-container-reservation">
            <input
              type="text"
              name="cardNumber"
              className="form-name"
              placeholder="card number"
              required
            />
            <input
              type="text"
              name="text"
              className="form-name"
              placeholder="card name"
              required
            />
            <input
              name="id"
              type="text"
              className="form-name"
              placeholder="security PIN"
              required
            />

            <div className="buttons-control">
              <button
                className="btn btn-next"
                onClick={() => {
                  setSteps(0);
                }}
              >
                <i className="fa-solid fa-backward"></i>
              </button>
              <button className="btn btn-next" onClick={handleReserved}>
                <i className="fa-solid fa-forward"></i>
              </button>
            </div>
          </form>
        )}
      </div>
      <div className="cart-reservation">
        <div className="cart-container">
          <div className="order-title">
            <h2>About your order</h2>
          </div>
          {order.order ? (
            <div className="cart-reservation-info ">
              <table>
                <thead>
                  <tr>
                    <th>Order</th>
                    <th>Description</th>
                    <th>Location</th>
                    <th>Guests</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>#433546</td>
                    <td>{order.order.description}</td>
                    <td>{order.order.location}</td>
                    <td>{order.quantity}</td>
                    <td>${order.order.price}</td>
                  </tr>
                  <tr>
                    <td>Sub-total</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>${order.order.price * order.quantity}</td>
                  </tr>
                  <tr>
                    <td>Service</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>$69</td>
                  </tr>
                  <tr>
                    <td>Total</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>${order.order.price * order.quantity + 69}</td>
                  </tr>
                </tbody>
              </table>
              <small> All information are incrypted </small>
            </div>
          ) : (
            <div className="container">There's nothing to reservate </div>
          )}
        </div>
      </div>
    </div>
  );
};
