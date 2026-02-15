import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-black text-white">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Logo</h1>

        <nav className="flex gap-4">
          <Link to="/home" className="hover:text-gray-300">
            Home
          </Link>

          <Link to="/products" className="hover:text-gray-300">
            Products
          </Link>

          <Link to="/cart" className="hover:text-gray-300">
            Cart
          </Link>
        </nav>
      </div>
    </header>
  );
}
