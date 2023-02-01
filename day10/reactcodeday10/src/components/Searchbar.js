import React, { useState } from "react";
import { searchRestaurant } from "../utils/helper";

const Searchbar = (props) => {
  const [searchBar, setsearchBar] = useState("");
  // const [findRestaurant, setfindRestaurant] = useState(restaurantList);

  const updateSearchbar = (set) => {
    setsearchBar(set);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={searchBar}
        onChange={(e) => {
          updateSearchbar(e.target.value);
        }}
      />
      <button
        onClick={() => {
          const data = searchRestaurant(searchBar, props.restaurantlist);
          props.setfindRestaurant(data);
        }}
      >
        Search
      </button>
    </div>
  );
};

export default Searchbar;
