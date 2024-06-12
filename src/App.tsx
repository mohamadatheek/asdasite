import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { MainPage } from "./app/MainPage";
import { BrowserRouter, useLocation } from "react-router-dom";
import { useEffect } from "react";
import ReactGA from "react-ga4";

function App() {
  const location = useLocation();
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);
  
  return (
    <BrowserRouter>
      <MainPage />;
    </BrowserRouter>
  );
}

export default App;
