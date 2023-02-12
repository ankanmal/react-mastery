import { useEffect, useState } from "react";
import { FETCH_RESTAURANT_MENU } from "../config";

const useRestaurantMenu = (resId) => {
  const [restaurant, setRestaurant] = useState(null);

  //get restaurant menu
  useEffect(() => {
    findRestaurant();
  }, []);

  findRestaurant = async () => {
    const data = await fetch(FETCH_RESTAURANT_MENU + resId);
    const json = await data.json();
    //console.log(json.data);
    setRestaurant(json.data);
  };

  //return restartuant menu
  return restaurant;
};

export default useRestaurantMenu;
