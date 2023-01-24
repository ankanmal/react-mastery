//using spread operator to destructure the array on fly
import { IMG_URL } from "../config";

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  lastMileTravelString,
}) => {
  //object destructuring of the res array data into its individual values
  // const { name, cloudinaryImageId, cuisines, lastMileTravelString } = res;
  return (
    <div className="card-res">
      <img
        src={IMG_URL + cloudinaryImageId}
        alt="restaurantlogo"
        className="res-img"
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{lastMileTravelString}</h4>
    </div>
  );
};

export default RestaurantCard;
