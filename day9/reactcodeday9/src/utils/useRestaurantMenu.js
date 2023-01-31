import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [restaurant, setRestaurant] = useState(null);

  //get restaurant menu
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

  //return restartuant menu
  return restaurant;
};

export default useRestaurantMenu;
