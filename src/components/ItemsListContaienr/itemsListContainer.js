import React from "react";
import ItemList from "./ItemList/ItemList";

export default function ItemsListContainer({ apartments }) {
  return (
    <>
      <h3> All Stays</h3>

      <div className="items-container">
        <ItemList apartments={apartments} />
      </div>
    </>
  );
}
