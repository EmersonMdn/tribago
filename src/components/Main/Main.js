import React from "react";
import ItemsListContainer from "../ItemsListContaienr/itemsListContainer";
import ItemsListSuperHotContainer from "../ItemsListSuperHotContainer/ItemsListSuperHotContainer";

export default function Main({ apartments }) {
  return (
    <main>
      <div className="topbar-main">
        <h2>Take a look to ours floors</h2>
        <p>12+ stays</p>
      </div>

      <div className="super-hot-container" id='carousel-container'>
        <ItemsListSuperHotContainer apartments={apartments} />
      </div>
      <ItemsListContainer apartments={apartments} />
    </main>
  );
}
