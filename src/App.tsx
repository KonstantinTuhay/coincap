import { Route, Routes } from "react-router-dom";
// import { MainPage } from "./pages/MainPage/MainPage";
import { Header } from "./components/Header/Header";
import { CoinInformation } from "./pages/CoinInformation";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/" element={<CoinInformation />} />
          {/* <Route path="/" element={<MainPage />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
