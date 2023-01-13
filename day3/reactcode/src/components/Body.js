import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../config";
import { useState } from "react";

import Searchbar from "./Searchbar";

const Body = () => {
  const [findRestaurant, setfindRestaurant] = useState(restaurantList);

  return (
    <>
      <Searchbar
        findRestaurant={findRestaurant}
        setfindRestaurant={setfindRestaurant}
      />
      <div className="res-body">
        {findRestaurant.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.uuid} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
