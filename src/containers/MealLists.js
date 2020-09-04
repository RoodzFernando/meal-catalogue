import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CategoryForm from './CategoryForm';
import { store, fetchData } from '../helpers/store';
import * as actions from '../actions/actionCreators';
import MealPage from './MealPage';
import Desserts from './Desserts';
import NewsLetter from '../components/NewsLetter';

function MealLists({ meals, filterCategory, filter }) {
  useEffect(() => {
    store.dispatch(
      fetchData('https://www.themealdb.com/api/json/v1/1/search.php?f=b', actions.listOfMealsAction),
    );
  }, []);
  const filterHandle = meal => {
    filterCategory(meal);
  };
  return (
    <div className="meals-list">
      <div className="meals">
        {
          meals.filter(meal => (filter === 'Categories' || meal.strCategory === filter))
            .map(item => (
              <MealPage key={item.idMeal} obj={item} />
            ))
        }
      </div>
      <div className="meals-right">
        <CategoryForm filterMeal={filterHandle} />
        <Desserts />
        <NewsLetter />
      </div>
    </div>
  );
}

MealLists.propTypes = {
  filterCategory: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  meals: PropTypes.arrayOf(PropTypes.shape({
    idMeal: PropTypes.string.isRequired,
  })).isRequired,
};

const mapStateToProps = state => ({
  meals: state.mealReducer.listOfMeals,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  filterCategory: category => dispatch(actions.changeCategoryAction(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MealLists);
