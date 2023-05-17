import { useLocation } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import { useContext, useEffect } from "react";
import { Order } from "./contex/OrdersContex";

function App() {
  const { pathname } = useLocation();

  const value = useContext(Order);
  console.log("🚀 ~ file: App.js:11 ~ App ~ value:", value)

  useEffect(() => {
    //Always we change layout the view will be in the top
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <HomePage />
    </>
  );
}

export default App;
