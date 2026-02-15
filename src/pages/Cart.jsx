import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../store/cartSlice";
import Header from "@/component/Header";
import Footer from "@/component/Footer";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <>
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-center">
        My Cart
      </h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">
          Cart is empty
        </p>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white p-4 rounded shadow flex justify-between items-center"
              >
                <div>
                  <h2 className="font-semibold">
                    {item.title}
                  </h2>
                  <p>
                    ${item.price} × {item.quantity}
                  </p>
                </div>

                <button
                  onClick={() =>
                    dispatch(removeFromCart(item.id))
                  }
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold mt-6 text-right">
            Total: ${total}
          </h2>
        </>
      )}
    </div>
    </>
  );
};

export default Cart;
