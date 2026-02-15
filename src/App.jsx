import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./pages/MaiLayout";

import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Blog from "./pages/Blogs";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<MainLayout />}>

          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/blog" element={<Blog />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
