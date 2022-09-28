import React from "react";
import { useEffect } from "react";
import useAxios from "../../middlewares/useAxios";
import Loading from "../loading/Loading";
import MostCatsItem from "./MostCatsItem";
import "./MotsCats.css";

const MostCats = () => {
  const [data, loading, error] = useAxios("/breed");

  useEffect(() => {
    if (!loading) {
      console.log(data);
    }
  }, [data]);

  return (
    <div className="most_cats animate__animated animate__fadeIn animate__faster">
      <h4>Top 10 most searched breeds</h4>

      {
        loading && (
          <div className="most_cats__loading">
            <Loading />
          </div>
        )
      }
      <div className="most_cats__container">
        {!loading &&
          data.length > 0 &&
          data
            .filter((e, i) => {
              if (i <= 10) return true;
              return false;
            })
            .map((e, i) => {
              return (
                <MostCatsItem
                  key={e.id}
                  index={i + 1}
                  name={e.name}
                  image={e.image}
                  description={e.description}
                  id={e.id}
                />
              );
            })}
      </div>
    </div>
  );
};

export default MostCats;
