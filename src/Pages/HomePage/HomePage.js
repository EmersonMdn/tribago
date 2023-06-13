import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import { Route, Routes } from "react-router-dom";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import Footer from "../../components/Footer/Footer";
import ReservationPage from "../ReservationPage/ReservationPage";
import { ReservedPage } from "../ReservedPage/ReservedPage";

export default function HomePage() {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    getApartments().then((data) => setApartments(data));
  }, []);

  const getApartments = async () => {
    const response = await fetch("/data/data.json");
    const result = await response.json();
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
            path="/detail/:productId"
            element={<ItemDetailContainer apartments={apartments} />}
          />
          <Route path="/reservationpage/" element={<ReservationPage />} />
          <Route path="/reserved" element={<ReservedPage />} />
        </Routes>
      </div>

      {/* <!--Pie de página--> */}
      <Footer />
      <footer className="footer"></footer>
    </>
  );
}
