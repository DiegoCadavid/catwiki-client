import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import useAxios from "../../../middlewares/useAxios";
import Loading from "../../loading/Loading";
import DiscoverImageItem from "./DiscoverImageItem";

const DiscoverImageContainer = () => {
  // Hacemos peticion para traer los elementos
  const [data = [], loading, error] = useAxios("/breed");
  return (
    <>
      {loading && (
        <div className="discover__image_container_loading">
          <Loading />
        </div>
      )}

      <div className="discover__image_container">
        {/* Limit 4 */}

        {!loading &&
          data
            .filter((e, i) => {
              if (i < 4) return true;
              return false;
            })
            .map((e) => {
              return (
                <DiscoverImageItem
                  key={e.id}
                  imageUrl={e.image}
                  name={e.name}
                  id={e.id}
                />
              );
            })}
      </div>
    </>
  );
};

export default DiscoverImageContainer;
