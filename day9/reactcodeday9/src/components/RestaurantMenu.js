import { useParams } from "react-router-dom";
import { IMG_URL } from "../config";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./ShimmerUi";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const restaurant = useRestaurantMenu(resId);

  return restaurant === null ? (
    <Shimmer />
  ) : (
    <div className="resMenu">
      <div>
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
            <li key={e.id}>{e.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantMenu;
