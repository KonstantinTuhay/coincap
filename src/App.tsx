import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { Header } from "./components/Header/Header";
import { CoinInformation } from "./pages/CoinInformation";
import { YourBriefcase } from "./components/YourBriefCase";
// import { AddCoin } from "./components/AddCoinModal";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/" element={<MainPage />} />
          <Route path="coininformation" element={<CoinInformation />} />
          <Route path="yourbriefcase" element={<YourBriefcase />} />
          {/* <Route path="addcoin" element={<AddCoin />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
