import React, { useState } from "react";

export default function Header({ apartments, setApartments, getApartments }) {
  const [findLocation, setFindLocation] = useState("");
  const [finded, setFinded] = useState(false);

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
          <img src="./media/logo.png" alt="" />
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
                onChange={searchLocation}
              />
              <input
                type="text"
                name="add-guests"
                className="input-guests"
                placeholder="Add guests"
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
