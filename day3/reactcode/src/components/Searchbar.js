import React, { useState } from "react";
import { restaurantList } from "../config";

function searchRestaurant(searchBar, findRestaurant) {
  const data1 = findRestaurant.filter((res) =>
    res.data.name.includes(searchBar)
  );
  return data1;
}

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
          const data = searchRestaurant(searchBar, props.findRestaurant);
          props.setfindRestaurant(data);
        }}
      >
        Search
      </button>
    </div>
  );
};

export default Searchbar;
