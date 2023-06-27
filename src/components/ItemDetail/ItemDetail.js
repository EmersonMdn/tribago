import { Link } from "react-router-dom";
import "./ItemDetail.css";
import ItemDetailMain from "../ItemDetailMain/ItemDetailMain";
import { Order } from "../../contex/OrdersContex";
import { useContext } from "react";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function ItemDetail({ item }) {
  const { quantity } = useContext(Order);

  const MySwal = withReactContent(Swal);

  return (
    <>
      <Helmet>
        <title>Windbnb | </title>
      </Helmet>
      <div className="topbanner">
        <p>
          <i className="fa-solid fa-location-dot"></i> Location: {item.location}
        </p>
        <p>
          <i className="fa-solid fa-calendar-days"></i> Today
        </p>
        <p>
          <i className="fa-solid fa-user"></i> {quantity}
        </p>
      </div>

      <div className="item-detail-container">
        <div className="item-detail-img">
          <img src={`/img/ap${item.img}.jpg`} alt="..." />
        </div>

        <div className="item-detail-details">
          <span className="detail-rate">
            <i className="fa-solid fa-star"></i> Rate: {item.stars} -{" "}
            <small> 14 reviews</small>
          </span>
          <p className="detail-type">{item.type}, 1 night </p>

          <h2 className="detail-description"> {item.description} </h2>
          <p className="details-icons">
            <i className="fa-solid fa-wifi"></i>
            <i className="fa-solid fa-tv"></i>
            <i className="fa-solid fa-shower"></i>
            <i className="fa-solid fa-mug-hot"></i>
            <i className="fa-solid fa-utensils"></i>
          </p>
          <p className="detail-price">${item.price} </p>
          <small>Per person | Taxes included</small>

          <div className="buttons">
            <button
              to="/reservationpage/"
              className="btn btn-order"
              onClick={() => {
                MySwal.fire("Reserved", "", "success");
              }}
            >
              <i className="fa-solid fa-tags"></i> Reserve
            </button>
            <Link to={"/"} className="btn btn-back">
              <i className="fa-regular fa-circle-left"></i> Back
            </Link>
          </div>
          {/* <p className="detail-beds">Beds: {item.beds} </p> */}
        </div>
      </div>

      <ItemDetailMain />
    </>
  );
}
