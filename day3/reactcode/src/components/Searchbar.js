import React, { useState } from "react";

const Searchbar = () => {
  const [searchBar, setsearchBar] = useState();

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
      <button>Search</button>
    </div>
  );
};

export default Searchbar;
