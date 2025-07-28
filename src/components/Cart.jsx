import { useDispatch, useSelector } from "react-redux"
import Itemlist from "./Itemlist"
import { clearItem } from "../Store/Cartslice"
import { Link } from "react-router-dom" 

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  // console.log(cartItems[0].card.info.price/100)

  const dispatch = useDispatch();

  const handle = () => {
    dispatch(clearItem());
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc +(item.card.info.price ? item.card.info.price : item.card.info.defaultPrice) / 100, 0);

  return (
    <div className="bg-slate-700 h-full pt-32 pb-20 text-center">
      <h1 className="text-center text-white font-bold text-2xl font-serif">
        Cart Items
      </h1>
      <button className="p-2 bg-red-400 rounded-lg" onClick={handle}>
        Clear
      </button>
      <div className="bg-white m-14 p-5 rounded-xl w-9/12 mx-auto">
        {cartItems.length === 0 && (
          <div>
            <h1 className="font-serif text-2xl m-4 text-red-500">Your cart is empty</h1>
            <Link
              to="/"
              className="mt-12 text-lg font-bold hover:bg-gray-600 hover:text-white rounded-xl p-2"
            >
              See Restaurants
            </Link>
          </div>
        )}
        <Itemlist items={cartItems} />

        {cartItems.length > 0 && (
          <button className="p-2 bg-red-400 rounded-lg">
            Please pay ₹{totalPrice.toFixed(2)}
          </button>
        )}
      </div>
    </div>
  );
};
export default Cart
