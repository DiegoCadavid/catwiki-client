import React from "react";
import CatList from "./CatList";
import imgtest from "../../assets/image 2.png";

const CatInfo = ({ info, image }) => {
  return (
    <div className="cat__info">
      <img src={image} alt="cat test image" />
      <div className="cat__bio">
        <h4>{info.name}</h4>
        <p> {info.description} </p>

        <CatList
          temperament={info.temperament}
          origin={info.origin}
          life={info.life_span}
          adaptability={info.adaptability}
          affection={info.affection_level}
          child={info.child_friendly}
          grooming={info.grooming}
          intelligence={info.intelligence}
          health={info.health_issues}
          social={info.social_needs}
          strager={info.stranger_friendly}
        />
      </div>
    </div>
  );
};

export default CatInfo;
