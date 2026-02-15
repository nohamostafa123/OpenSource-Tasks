import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/ProdectCardSlice";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";
import { addToCart } from "../store/CartSlice";
import { useNavigate } from "react-router-dom"; 

const Products = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const { items, loading, toastMessage, toastType } =
    useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    if (toastMessage) {
      switch (toastType) {
        case "info":
          toast.info(toastMessage);
          break;
        case "success":
          toast.success(toastMessage);
          break;
        case "error":
          toast.error(toastMessage);
          break;
        default:
          toast(toastMessage);
      }
    }
  }, [toastMessage, toastType]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart"); 
  };

  return (
    <>
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Products
      </h1>

      {loading && (
        <div className="flex justify-center items-center my-10">
          <ClipLoader color="#3B82F6" size={60} />
        </div>
      )}

      {!loading && (
        <div className="grid md:grid-cols-3 gap-6">
          {items.slice(0, 9).map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-xl p-4"
            >
              <img
                src={product.images[0]}
                alt={product.title}
                className="h-40 w-full object-cover rounded"
              />

              <h2 className="text-lg font-semibold mt-3">
                {product.title}
              </h2>

              <p className="text-blue-600 font-bold mt-2">
                ${product.price}
              </p>

              <button
                onClick={() => handleAddToCart(product)}
                className="mt-3 w-full bg-slate-900 text-white py-2 rounded hover:bg-blue-600"
              >
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
    </>
  );
};

export default Products;
