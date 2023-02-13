import { useSelector } from "react-redux";
const Cart = () => {
  const cartQty = useSelector((state) => state.cart.length);
  console.log(cartQty);
  return (
    <div>
      <h1>Cart-{cartQty}</h1>
    </div>
  );
};
export default Cart;
