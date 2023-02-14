import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../slice/cartSlice";
const Cart = () => {
  const cartQty = useSelector((state) => state.cart.length);
  console.log(cartQty);
  const dispatch = useDispatch();
  const removeLastItemCart = () => {
    dispatch(removeFromCart());
  };
  return (
    <div>
      <h1>Cart-{cartQty}</h1>
      <button
        onClick={() => removeLastItemCart()}
        className="bg-red-600  rounded-lg text-white"
      >
        Remove from Cart
      </button>
    </div>
  );
};
export default Cart;
