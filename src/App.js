import "./App.css";
import CartScreen from "./Screens/CartScreen/CartScreen";
import HomeScreen from "./Screens/HomeScreen/HomeScreen";
import NavBar from "./Screens/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SaveLater from "./Screens/SaveLaterScreen/SaveLater";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/cart" element={<CartScreen />} />
          <Route path="/saved" element={<SaveLater />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
