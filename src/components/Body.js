import RestaurantCard from "./RestaurantCard";
import restaurantList from "../constants";
import "../index.css";
import { InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { TextField } from "@mui/material";
import { useState } from "react";

const filterData = (searchText, restaurants) => {
  const filteredData = restaurants.filter((restaurant) =>
    restaurant.data.name.includes(searchText)
  );

  return filteredData;
};

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState(restaurantList);

  return (
    <div>
      <TextField
        sx={{ width: "50%", m: 2 }}
        label="Search for your favourite restaurant"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={() => {
                  const data = filterData(searchText, restaurants);
                  setRestaurants(data);
                }}
              >
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <div className="restaurant-list">
        {restaurants.map((restaurantItem) => {
          return (
            <RestaurantCard
              {...restaurantItem.data}
              key={restaurantItem.data.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
