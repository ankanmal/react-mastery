import React, { useState } from "react";
import { searchRestaurant } from "../utils/helper";

const Searchbar = (props) => {
  const [searchBar, setsearchBar] = useState("");
  // const [findRestaurant, setfindRestaurant] = useState(restaurantList);

  const updateSearchbar = (set) => {
    setsearchBar(set);
  };

  return (
    <div className=" bg-gradient-to-r from-violet-500 to-fuchsia-500 py-3 flex justify-center">
      <input
        type="text"
        placeholder="Search"
        value={searchBar}
        onChange={(e) => {
          updateSearchbar(e.target.value);
        }}
        className="m-2 px-2"
      />
      <button
        onClick={() => {
          const data = searchRestaurant(searchBar, props.restaurantlist);
          props.setfindRestaurant(data);
        }}
        className="bg-pink-700 px-2 rounded-md m-2 hover:bg-pink-900"
      >
        Search
      </button>
    </div>
  );
};

export default Searchbar;
