import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";

export default function ItemDetailContainer() {
  const [item, setItem] = useState([]);
  const params = useParams();

  useEffect(() => {
    const getApartments = async () => {
      const response = await fetch("/data/data.json");
      const result = await response.json();
      return result;
    };

    getApartments().then((data) => {
      console.log(data);
      let itemFilter = data.filter(
        (data) => data.id === parseInt(params.productId)
      );
      setItem(...itemFilter);
      console.log(...itemFilter);
    });
  }, [params]);

  return (
    <>
      <ItemDetail item={item} />
    </>
  );
}
