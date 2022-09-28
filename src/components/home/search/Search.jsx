import React, { useState } from "react";

import { useEffect } from "react";
import useAxios from "../../../middlewares/useAxios";

import icon from "../../../assets/CatwikiLogo.svg";
import SearchInput from "./SearchInput";
import SearchInputMobile from "./SearchInputMobile";

import "./Search.css";
import Loading from "../../loading/Loading";

const Search = ({ deviceMobile }) => {
  const [searching, setSearching] = useState(false);
  const [data, loading, error] = useAxios("/breed");
  const [inputValue, setInputValue] = useState("");
  const [searchBreeds, setSearchBreeds] = useState([]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    setSearchBreeds(
      data
        .map((i) => {
          return { name: i.name, id: i.id };
        })
        .filter((e = "") => {
          const re = new RegExp(inputValue, "gi");
          if (e.name.match(re)) {
            return true;
          }
          return false;
        })
        .filter((e, i) => {
          if (i <= 5) return true;
          return false;
        })
    );
  }, [inputValue]);

  useEffect(() => {
    if (inputValue.trim() != "" && searchBreeds.length > 0) {
      setSearching(true);
    } else {
      setSearching(false);
    }
  }, [searchBreeds]);

  return (
    <div className="search">
      <img src={icon} alt="icon CatWiki" />

      {
        loading && <div className="search__loading"> 
          <Loading />
        </div>
      }

      {!loading && (
        <>
          <p>
            Get to know more about <br /> your cat breed
          </p>
          {!deviceMobile ? (
            <SearchInput
              searching={searching}
              handleChange={handleChange}
              inputValue={inputValue}
              searchBreeds={searchBreeds}
            />
          ) : (
            <SearchInputMobile
              searching={searching}
              handleChange={handleChange}
              inputValue={inputValue}
              searchBreeds={searchBreeds}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Search;
