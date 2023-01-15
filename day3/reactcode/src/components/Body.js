import RestaurantCard from "./RestaurantCard";
import ShimmerUi from "./ShimmerUi";
import { useState, useEffect } from "react";

import Searchbar from "./Searchbar";

const Body = () => {
  const [findRestaurant, setfindRestaurant] = useState([]);
  const [restaurantlist, setRestaurantlist] = useState([]);
  const dummyShimData = [
    "121",
    "122",
    "123",
    "124",
    "125",
    "126",
    "127",
    "128",
    "129",
    "1210",
  ];

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

  return restaurantlist?.length === 0 ? (
    <ShimmerUi dummyShimData={dummyShimData} />
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
              <RestaurantCard
                {...restaurant?.data}
                key={restaurant?.data?.uuid}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default Body;
