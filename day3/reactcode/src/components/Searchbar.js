import React, { useState } from "react";

function searchRestaurant(searchBar, restaurantlist) {
  const data1 = restaurantlist.filter((res) =>
    res?.data?.name?.toLowerCase()?.includes(searchBar.toLowerCase())
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
