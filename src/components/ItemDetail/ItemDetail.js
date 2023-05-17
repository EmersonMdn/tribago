import { Link } from "react-router-dom";
import "./ItemDetail.css";
import ItemDetailMain from "../ItemDetailMain/ItemDetailMain";

export default function ItemDetail({ item }) {
  console.log(typeof parseInt(item.price));
  return (
    <>
      <div className="topbanner">
        <p>
          <i className="fa-solid fa-location-dot"></i> Location: {item.location}
        </p>
        <p>
          <i className="fa-solid fa-calendar-days"></i> Select a day
        </p>
        <p>
          <i className="fa-solid fa-user"></i> 3
        </p>
        <button className="btn btn-modify">
          <i className="fa-solid fa-magnifying-glass"></i> Modify
        </button>
      </div>

      <div className="item-detail-container">
        <div className="item-detail-img">
          <img src={`/img/ap${item.img}.jpg`} alt="..." />
        </div>

        <div className="item-detail-details">
          <h2 className="detail-description"> {item.description} </h2>
          <p className="details-icons">
            <i className="fa-solid fa-wifi"></i>
            <i className="fa-solid fa-tv"></i>
            <i className="fa-solid fa-shower"></i>
            <i className="fa-solid fa-mug-hot"></i>
            <i className="fa-solid fa-utensils"></i>
          </p>
          <p className="detail-type">{item.type}, 1 night </p>
          {/* <p className="detail-beds">Beds: {item.beds} </p> */}

          <span className="detail-rate">
            <i className="fa-solid fa-star"></i> Rate: {item.stars} -{" "}
            <small>14 reviews</small>
          </span>

          <p className="detail-price">${item.price} </p>
          <small>Taxes included</small>
          <div className="buttons">
            <button className="btn btn-order">
              <i className="fa-solid fa-tags"></i> Order
            </button>
            <Link to="/" className="btn btn-back">
              <i className="fa-regular fa-circle-left"></i> Back
            </Link>
          </div>
        </div>
      </div>

      <ItemDetailMain />
    </>
  );
}
