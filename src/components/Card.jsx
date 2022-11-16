import React from "react";
import { useNavigate } from "react-router-dom";

function Card({ item }) {
  const navigate = useNavigate();
  console.log(item.recipe)
  return (
    <div className="card">
      <h2>{item?.recipe?.label}</h2>
      <img src={item?.recipe?.image} />
      <button onClick={() => navigate("/details", { state: item.recipe })}>
        View More
      </button>
    </div>
  );
}

export default Card;
