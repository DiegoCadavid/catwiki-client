import React from "react";
import { Link } from "react-router-dom";
import imgtest from "../../assets/image 3.png";

const MostCatsItem = ({ index, name, image, description, id }) => {
  return (
    <div className="most_cats__item">
      <img src={image} alt={`Image for ${name}`} />
      <div className="most_cats__item_info">
        <Link to={`/cat/${id}`}>
          {index}. {name}
        </Link>
        <p> {description} </p>
      </div>
    </div>
  );
};

export default MostCatsItem;
