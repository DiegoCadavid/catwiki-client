import React from "react";
import { useParams } from "react-router-dom";

import CatInfo from "./CatInfo";

import "./Cat.css";
import CatPhotos from "./CatPhotos";
import useAxios from "../../middlewares/useAxios";
import { useEffect } from "react";
import Loading from "../loading/Loading";

const Cat = () => {
  const { breed } = useParams();
  const [data, loading, error] = useAxios(`/breed/${breed}`);
  return (
    <div className="cat animate__animated animate__fadeIn animate__faster">
      {loading && (
        <div className="cat__loading">
          <Loading />
        </div>
      )}

      {!loading && data != null && (
        <>
          <CatInfo info={data.info[0]} image={data.images[0]} />
          <CatPhotos images={data.images} />
        </>
      )}
    </div>
  );
};

export default Cat;
