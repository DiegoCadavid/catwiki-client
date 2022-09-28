import React from "react";
import { Link } from "react-router-dom";
import "./SearchModal.css";

const SearchModalMobile = ({
  searching,
  handleClosed,
  handleChange,
  inputValue,
  searchBreeds = [],
}) => {
  return (
    <>
      <div className="search__modal_background animate__animated animate__fadeIn animate__faster" />
      <div className="Search__modal animate__animated animate__fadeInDown animate__faster">
        <button onClick={handleClosed} /> {/* Button lose */}
        <input
          type="text"
          placeholder="Search"
          onChange={handleChange}
          value={inputValue}
        />
        {searching && (
          <div className="search__modal_items_container">
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
    </>
  );
};

export default SearchModalMobile;
