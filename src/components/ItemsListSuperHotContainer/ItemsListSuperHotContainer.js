import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function ItemsListContainer({ apartments }) {
  const filteredItems = apartments.filter((e) => e.is_hot === true);
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  const navegate = useNavigate();

  const handleDetail = (id) => {
    navegate(`/detail/${id}`);
  };

  useEffect(() => {
    setTimeout(() => {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, 100);
  }, []);

  return (
    <>
      <motion.h3 className="super-hot-title">SUPER HOT OFFERS</motion.h3>
      <motion.div ref={carousel} className="carousel">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="items-super-hot-container"
        >
          {filteredItems.map((e) => {
            return (
              <motion.div className="carousel-container" key={e.id}>
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
                      <h4 onClick={() => handleDetail(e.id)}>
                        {e.description}
                      </h4>
                      <p className="price-desc">{e.price}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </>
  );
}
