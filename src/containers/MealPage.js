import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function MealPage({ obj, mealState, filterCategory }) {
  return (
    <div className="meals-body">
      <div className="meals-left">
        <Link to={`/meals/${obj.idMeal}`}>
          <div className="meal-card">
            <p>{obj.strCategory}</p>
            <img src={obj.strMealThumb} alt={obj.strMeal} />
            <h1>{obj.strMeal}</h1>
          </div>
        </Link>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  mealState: state.mealReducer.listOfMeals,
});

export default connect(mapStateToProps)(MealPage);
