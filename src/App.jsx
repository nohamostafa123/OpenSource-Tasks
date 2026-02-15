import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
