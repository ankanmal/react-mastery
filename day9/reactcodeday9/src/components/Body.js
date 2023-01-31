import RestaurantCard from "./RestaurantCard";
import ShimmerUi from "./ShimmerUi";
import { useState, useEffect } from "react";

import Searchbar from "./Searchbar";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [findRestaurant, setfindRestaurant] = useState([]);
  const [restaurantlist, setRestaurantlist] = useState([]);

  // Now we will use the data from the swiggy public api. For that we need to use useEffect because we have to fetch the api on the initial render
  useEffect(() => {
    fetchSwiggyApi();
  }, []);

  async function fetchSwiggyApi() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.572646&lng=88.36389500000001&page_type=DESKTOP_WEB_LISTING"
    );
    const jsondata = await data.json();
    //console.log(jsondata?.data?.cards[2]?.data?.data?.cards);
    setRestaurantlist(jsondata?.data?.cards[2]?.data?.data?.cards);
    setfindRestaurant(jsondata?.data?.cards[2]?.data?.data?.cards);
  }

  const isOnline = useOnline();
  if (!isOnline) {
    return <h1>You Are Offline 🔴</h1>;
  }

  return restaurantlist?.length === 0 ? (
    <ShimmerUi />
  ) : (
    <>
      <Searchbar
        restaurantlist={restaurantlist}
        setfindRestaurant={setfindRestaurant}
      />
      {findRestaurant.length === 0 ? (
        <h1>No restaurant found </h1>
      ) : (
        <div className="res-body">
          {findRestaurant.map((restaurant) => {
            return (
              <Link
                to={"/restaurant/" + restaurant?.data?.id}
                key={restaurant?.data?.uuid}
              >
                <RestaurantCard
                  {...restaurant?.data}
                  key={restaurant?.data?.uuid}
                />
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Body;
