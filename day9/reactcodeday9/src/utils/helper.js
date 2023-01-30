//exporting search functanality
export function searchRestaurant(searchBar, restaurantlist) {
  const data1 = restaurantlist.filter((res) =>
    res?.data?.name?.toLowerCase()?.includes(searchBar.toLowerCase())
  );
  return data1;
}
