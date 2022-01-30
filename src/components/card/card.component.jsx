import React from "react";

import "./card.styles.css";

export const Card = (props) => {
  const { name, id, email } = props.monster;
  const clickHandler = () => alert(`Hello from ${name}`);
  return (
    <div className="card-container" onClick={clickHandler}>
      <img
        alt="monster"
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      />
      <h2> {name} </h2>
      <p> {email} </p>
    </div>
  );
};
