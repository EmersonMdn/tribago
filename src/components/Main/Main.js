import React from "react";
import ItemsListContainer from "../ItemsListContaienr/itemsListContainer";
import ItemsListSuperHotContainer from "../ItemsListSuperHotContainer/ItemsListSuperHotContainer";
import { Helmet } from "react-helmet";

export default function Main({ apartments }) {
  return (
    <main>
      <Helmet>
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="./media/devchallenges.png"
        />
        <title>Windbnb | Home</title>
      </Helmet>
      <div className="topbar-main">
        <h2>Take a look to ours floors</h2>
        <p>12+ stays</p>
      </div>

      <div className="super-hot-container" id="carousel-container">
        <ItemsListSuperHotContainer apartments={apartments} />
      </div>
      <ItemsListContainer apartments={apartments} />
    </main>
  );
}
