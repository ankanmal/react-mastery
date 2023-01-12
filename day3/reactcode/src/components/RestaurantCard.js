//using spread operator to destructure the array on fly
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
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
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
