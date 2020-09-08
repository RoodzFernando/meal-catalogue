import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function MealPage({ obj }) {
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

MealPage.propTypes = {
  obj: PropTypes.shape({
    idMeal: PropTypes.string.isRequired,
    strMeal: PropTypes.string.isRequired,
    strCategory: PropTypes.string.isRequired,
    strMealThumb: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  mealState: state.mealReducer.listOfMeals,
});

export default connect(mapStateToProps)(MealPage);
