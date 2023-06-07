import { Helmet } from "react-helmet";
import "./ReservationPage.css";
import React from "react";
import { FormReservation } from "../../components/FormReservation/FormReservation";

const ReservationPage = () => {
  return (
    <div className="reservation-container">
      <Helmet>
        <title>Windbnb | Reservation </title>
      </Helmet>

      <div>
        <FormReservation />
      </div>
    </div>
  );
};

export default ReservationPage;

// eslint-disable-next-line no-lone-blocks
{
  /* <img className="card-animation" src="/media/wallet.gif" alt="card" /> */
}
