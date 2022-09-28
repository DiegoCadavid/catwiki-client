import React from "react";
import CatListItem from "./CatListItem";

const CatList = ({
  temperament,
  origin,
  life,
  adaptability,
  affection,
  child,
  grooming,
  intelligence,
  health,
  social,
  strager,
}) => {
  return (
    <ul>
      <CatListItem title="Temperament" content={temperament} />
      <CatListItem title="Origin" content={origin} />
      <CatListItem title="Life Span" content={life} />

      <CatListItem title="Adaptability" punctuation={adaptability} />
      <CatListItem title="Affection level" punctuation={affection} />
      <CatListItem title="Child Friendly" punctuation={child} />
      <CatListItem title="Grooming" punctuation={grooming} />
      <CatListItem title="Intelligence" punctuation={intelligence} />
      <CatListItem title="Health issues" punctuation={health} />
      <CatListItem title="Social needs" punctuation={social} />
      <CatListItem title="Stranger friendly" punctuation={strager} />
    </ul>
  );
};

export default CatList;
