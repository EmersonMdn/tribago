import React from "react";
import { motion } from "framer-motion";

export default function ItemsListContainer({ apartments }) {
  const filteredItems = apartments.filter((e) => e.is_hot === true);

  return (
    <>
      <h3 className="super-hot-title">SUPER HOT OFFERS</h3>
      <div className="carousel">
        <motion.div
          drag="x"
          dragConstraints={{ right: 10, left: -4100 }}
          className="items-super-hot-container"
        >
          {filteredItems.map((e) => (
            <div className="carousel-container" key={e.id}>
              <div className="carousel-item">
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
                  <div className="card-description-bottom">
                    <h4>{e.description}</h4>
                    <p className="price-desc">{e.price}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
}
