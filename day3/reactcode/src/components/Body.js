import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../config";
import Searchbar from "./Searchbar";

const Body = () => {
  return (
    <>
      <Searchbar />
      <div className="res-body">
        {restaurantList.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.uuid} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
