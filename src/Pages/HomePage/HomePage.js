import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import { Route, Routes } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

export default function HomePage() {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    getApartments();
  }, []);

  const getApartments = async () => {
    const response = await fetch("./data/data.json");
    const result = await response.json();
    setApartments(result);
    return result;
  };

  return (
    <>
      <div className="main-container">
        <Header
          apartments={apartments}
          setApartments={setApartments}
          getApartments={getApartments}
        />
        <Routes>
          <Route path="/" element={<Main apartments={apartments} />} />
          <Route
            path="/item"
            element={<ItemDetail apartments={apartments} />}
          />
        </Routes>
      </div>

      {/* <!--Pie de página--> */}
      <footer className="footer">&copy; Emerson Medina - Mayo 2023 </footer>
    </>
  );
}
