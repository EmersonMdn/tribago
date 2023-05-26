import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Order } from "../../contex/OrdersContex";

export default function Header({ apartments, setApartments, getApartments }) {
  const [findLocation, setFindLocation] = useState("");
  const [finded, setFinded] = useState(false);

  const { editQuantity } = useContext(Order);

  const searchLocation = async (e) => {
    const apartmentsAux = await getApartments();

    //? BUSCAR ESTADO
    setFindLocation(e.target.value);

    //? FILTRADO DE BUSQUEDA
    let apartmentsFindeds = apartments.filter((e) => {
      return e.location.toLowerCase().includes(findLocation.toLowerCase());
    });

    //? COMPROBAR SI HAY RESULTADOS
    if (findLocation.length <= 1 || apartmentsFindeds <= 0) {
      apartmentsFindeds = apartmentsAux;
      setFinded(true);
    } else {
      setFinded(false);
    }

    setApartments(apartmentsFindeds);
  };

  return (
    <>
      <header>
        <nav className="navbar">
          <Link to="/">
            <img src="/media/logo.png" alt="" />
          </Link>
          <div>
            <form
              className="form"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <input
                type="text"
                name="location"
                className="input-location"
                placeholder="Find location"
                autoComplete="none"
                onChange={searchLocation}
              />
              <input
                type="number"
                name="add-guests"
                className="input-guests"
                placeholder="Add guests"
                onChange={(e) => {
                  editQuantity(e.target.value);
                }}
              />
              <button className="search-btn">
                <i className="fa-solid fa-magnifying-glass"></i>{" "}
              </button>
            </form>
            {finded && findLocation.length > 1 && (
              <p className="not-founded">No se encontro ninguna coincidencia</p>
            )}
          </div>
        </nav>
      </header>
    </>
  );
}
