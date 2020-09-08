import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function ShowMeal({ match }) {
  const [detail, setDetail] = useState([]);
  const fetchDrinks = async () => {
    const drinksFetch = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${match.params.id}`);
    const data = await drinksFetch.json();
    setDetail(data.meals);
  };
  useEffect(() => {
    fetchDrinks();
  });
  return (
    <div className="meal-detail">
      {
            detail.map(item => (
              <div key={item.idMeal} className="detail">
                <div className="img-detail">
                  <img src={item.strMealThumb} alt="" />
                </div>
                <div className="detail-right">
                  <h1>{item.strMeal}</h1>
                  <h2>{item.strCategory}</h2>
                  <span>Instructions:</span>
                  <p>{item.strInstructions}</p>
                </div>
              </div>
            ))
          }
    </div>
  );
}

ShowMeal.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default ShowMeal;
