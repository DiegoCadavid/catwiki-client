import React from "react";
import { Link } from "react-router-dom";

import Loading from "../../loading/Loading";

const SearchInput = ({
  searching,
  handleChange,
  inputValue,
  searchBreeds = [],
}) => {
  return (
    <div className="search__input_container">
      <input
        type="text"
        placeholder="Enter your breed"
        onChange={handleChange}
        value={inputValue}
      />

      {searching && (
        <div className="search__items_container">
          {searchBreeds.map((e) => {
            return (
              <Link key={e.id} to={`/cat/${e.id}`}>
                {e.name}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchInput;
