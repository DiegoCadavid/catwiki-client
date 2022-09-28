import React, { useState, useEffect } from "react";
import SearchModalMobile from "./SearchModalMobile";

const SearchInputMobile = ({
  searching,
  handleChange,
  inputValue,
  searchBreeds,
}) => {
  const [modalShow, setModalShow] = useState(false);

  const handleOpen = () => {
    document.body.classList.add("noscroll");
    setModalShow(true);
  };

  const handleClosed = () => {
    document.body.classList.remove("noscroll");
    setModalShow(false);
  };

  useEffect(() => {
    return () => {
      document.body.classList.remove("noscroll");
    };
  }, []);

  return (
    <div className="search__input_container">
      <button onClick={handleOpen}> Search </button>
      {modalShow && (
        <SearchModalMobile
          searching={searching}
          handleChange={handleChange}
          inputValue={inputValue}
          searchBreeds={searchBreeds}
          handleClosed={handleClosed}
        />
      )}
    </div>
  );
};

export default SearchInputMobile;
