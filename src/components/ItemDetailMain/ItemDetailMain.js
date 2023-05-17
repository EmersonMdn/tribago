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
                <i className="fa-solid fa-person-walking-arrow-right"></i> Check-in:
                12:00
              </p>
              <p>
                <i className="fa-solid fa-person-walking-arrow-loop-left"></i>{" "}
                Check-out: 10:00
              </p>
            </div>
          </div>
          <div className="about-container">
            <hr></hr>
            <h3>About this place</h3>
            <p>
              This unique place has a style all its own. A very quiet homely
              house with a modern contemporary style. 25 mins to downtown
              Ottawa. The antidote to hotel rooms and sterile Airbnb rentals.
              Aesthetic and comfort abound in the charming and well furnished
              unit. Spacious and drenched in natural light. Take a look around,
              we’d love to host you. The space Eclectic & minimalistic room in a
              townhouse in a lovely neighbourhood in Ottawa. Home away from home
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
