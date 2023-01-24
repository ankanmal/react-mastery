import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_URL } from "../config";
import Shimmer from "./ShimmerUi";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  // console.log(param);
  useEffect(() => {
    findRestaurant();
  }, []);

  findRestaurant = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=22.572646&lng=88.36389500000001&menuId=" +
        resId
    );
    const json = await data.json();
    //console.log(json.data);
    setRestaurant(json.data);
  };

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
