import React from "react";
import ItemsListContainer from "../ItemsListContaienr/itemsListContainer";

export default function Main({ apartments }) {
  return (
    <main>
      <div className="topbar-main">
        <h2>Stays in Finland</h2>
        <p>12+ stays</p>
      </div>

      <ItemsListContainer apartments={apartments} />
    </main>
  );
}
