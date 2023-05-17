import "./ItemDetail.css";

export default function ItemDetail({ item }) {
  return (
    <>
      <div className="topbanner">
        <p>
          <i class="fa-solid fa-location-dot"></i> Location: {item.location}
        </p>
        <p>
          <i class="fa-solid fa-calendar-days"></i> Select a day
        </p>
        <p>
          <i class="fa-solid fa-user"></i> 3
        </p>
        <button className="btn btn-modify">
          <i class="fa-solid fa-magnifying-glass"></i> Modify{" "}
        </button>
      </div>

      <div className="item-detail-container">
        <div className="item-detail-img">
          <img src={`/img/ap${item.img}.jpg`} alt="..." />
        </div>

        <div className="item-detail-details">
          <span>Rate: {item.stars}</span>
          <h3> {item.description} </h3>

          <p>{item.type} </p>
          <p>{item.price} </p>
          <p>Beds: {item.beds} </p>

          <button className="btn">Order</button>
        </div>
      </div>
    </>
  );
}
