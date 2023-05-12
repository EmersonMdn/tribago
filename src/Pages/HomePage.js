import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";

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
      <div className="container">
        <Header apartments={apartments} setApartments={setApartments} getApartments={getApartments} />
        <Main apartments={apartments} />
      </div>

      {/* <!--Pie de página--> */}
      <footer className="footer">&copy; Emerson Medina - Mayo 2023 </footer>
    </>
  );
}
