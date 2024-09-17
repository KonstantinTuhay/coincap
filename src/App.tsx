import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/" element={<MainPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
