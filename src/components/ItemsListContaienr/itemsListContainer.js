import React from "react";

export default function ItemsListContainer({ apartments }) {
  return (
    <>
      <div className="items-container">
        {apartments.map((e) => (
          <div className="card" key={e.id}>
            <div className="card-img">
              <img src={`./img/ap${e.img}.jpg`} alt="" />
            </div>

            <div className="card-description">
              <div className="card-desc-container">
                {e.is_hot !== false && (
                  <span className="super-hot">
                    <strong>SUPER HOT</strong>
                  </span>
                )}

                <span>{e.type} </span>
                <span> {e.beds} beds</span>
              </div>
              <div className="card-desc-stars">
                <i className="fa-solid fa-star"></i>
                <span> {e.stars} </span>
              </div>
            </div>
            <div className="card-description">
              <h4>{e.description}</h4>
              <p className="price-desc">{e.price}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
