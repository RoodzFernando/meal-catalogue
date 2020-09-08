/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { store, fetchData } from '../helpers/store';
import * as actions from '../actions/actionCreators';

function CategoryForm({ categories, filterMeal }) {
  useEffect(() => {
    store.dispatch(
      fetchData('https://www.themealdb.com/api/json/v1/1/list.php?c=list', actions.listOfCategoriesAction),
    );
  }, []);

  const handleFilterChange = event => {
    const { value } = event.target;
    filterMeal(value);
  };
  return (
    <form>
      <select onChange={handleFilterChange}>
        <option value="Categories">Categories</option>
        {
          categories.map((cat, id) => (
            <option key={id} value={cat.strCategory}>{cat.strCategory}</option>
          ))
        }
      </select>
    </form>
  );
}

CategoryForm.propTypes = {
  filterMeal: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.shape({
    strCategory: PropTypes.string.isRequired,
  })).isRequired,
};

const mapStateToProps = state => ({
  categories: state.mealReducer.listOfCategories,
  mealState: state.mealReducer.listOfMeals,
});

export default connect(mapStateToProps)(CategoryForm);
