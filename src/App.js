import { useLocation } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import { useEffect } from "react";

function App() {
  const { pathname } = useLocation();

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
