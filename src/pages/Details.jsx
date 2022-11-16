import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Details() {
  const { state: details } = useLocation();
  const navigate = useNavigate();
  console.log(details);
  return (
    <div className="detail">
      <h1>{details.label}</h1>
      <div className="info-div">
        <div className="values">
          <h3>Nutriens</h3>
          <hr />
          <ul>
            <li>Calcium:{details.digest[5].total.toFixed(2)}mg</li>
            <li>Carbs:{details.digest[1].total.toFixed(2)}g</li>
            <li>Calcium:{details.digest[5].total.toFixed(2)}mg</li>
            <li>Cholestrol:{details.digest[3].total.toFixed(2)}mg</li>
            <li>Energy:{details.calories.toFixed(2)}kcal</li>
            <li>Fat:{details.digest[0].total.toFixed(2)}</li>
            <li>Protein:{details.digest[2].total.toFixed(2)}</li>
          </ul>
        </div>
        <img src={details.image} />
        <div className="materials">
          {details.ingredientLines.map((list, idx) => (
            <ul>
              <li key={idx}>{list}</li>
            </ul>
          ))}
        </div>
      </div>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
}

export default Details;
