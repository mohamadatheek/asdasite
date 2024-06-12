import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { MainPage } from "./app/MainPage";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename={'/asdasite'}>
      <MainPage />;
    </BrowserRouter>
  );
}

export default App;
