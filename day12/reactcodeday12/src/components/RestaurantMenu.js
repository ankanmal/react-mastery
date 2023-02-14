import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { IMG_URL } from "../config";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./ShimmerUi";
import { addToCart } from "../slice/cartSlice";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const dispatch = useDispatch();

  const restaurant = useRestaurantMenu(resId);

  const addItemToCart = () => {
    dispatch(addToCart("grapes"));
  };

  return restaurant === null ? (
    <Shimmer />
  ) : (
    <div className="flex">
      <div className="m-3">
        <h1>Restaurant:{resId}</h1>
        <h2>{restaurant.name}</h2>
        <img src={IMG_URL + restaurant.cloudinaryImageId} alt="res_img" />
        <h2>{restaurant.costForTwoMsg}</h2>
        <h2>{restaurant.avgRatingString}*</h2>
      </div>
      <div>
        <h2>Menu</h2>
        <ul>
          {Object.values(restaurant?.menu?.items).map((e) => (
            <li key={e.id}>
              {e.name}-
              <button
                className="bg-green-500 border
             border-white rounded-xl"
                onClick={() => addItemToCart()}
              >
                Add To Cart
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantMenu;
