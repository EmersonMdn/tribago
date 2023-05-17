import React from "react";

export default function ItemDetailMain() {
  return (
    <>
      <div className="detail-main">
        <div className="login-banner">
          <p>Log in to get exclusive discounts in this accommodation</p>
          <button className="btn">
            Log in to your account to see the deals
          </button>
        </div>

        <div className="accommodations">
          <div className="accommodation-amenities-container">
            <h3>Accommodation amenities</h3>
            <div className="accommodation-amenities">
              <div className="Advanges">
                <strong>Advanges</strong>
                <ul>
                  <li>Free Wi-Fi in common areas</li>
                  <li>Free parking</li>
                  <li>Pool</li>
                  <li>Garden</li>
                  <li>Air conditioning in common areas</li>
                </ul>
              </div>
              <div className="More-services">
                <strong>More services</strong>
                <ul>
                  <li>Towels / Linens</li>
                </ul>
              </div>
              <div className="Gastronomy">
                <strong>Gastronomy</strong>
                <ul>
                  <li>BBQ area</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="accommodation-conditions-container">
            <h3>Accommodation conditions</h3>
            <div className="accommodation-conditions">
              <h4>Schedule</h4>
              <p>
                <i class="fa-solid fa-person-walking-arrow-right"></i> Check-in:
                12:00
              </p>
              <p>
                <i class="fa-solid fa-person-walking-arrow-loop-left"></i>{" "}
                Check-out: 10:00
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
