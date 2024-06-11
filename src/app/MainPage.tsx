import { Route, Routes } from "react-router-dom";
import { Layout } from "./layout/Layout";
import { AboutUs } from "./AboutUs";
import { Home } from "./Home";
import { Academics } from "./Academics";
import { Students } from "./Students";
import { News } from "./News";
import { Contactus } from "./Contactus";
import { styled } from "@mui/material";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export const MainPage = () => {
  const renderRoutes = () => (
    <Routes>
      <Route path={"home"} element={<Home />} />
      <Route path={"/"} element={<Home />} />
      <Route path={"academics"} element={<Academics />} />
      <Route path={"students"} element={<Students />} />
      <Route path={"news"} element={<News />} />
      <Route path={"about"} element={<AboutUs />} />
      <Route path={"contact"} element={<Contactus />} />
    </Routes>
  );
  return (
    <>
      <Layout />
      <DrawerHeader />
      {renderRoutes()}
    </>
  );
};
