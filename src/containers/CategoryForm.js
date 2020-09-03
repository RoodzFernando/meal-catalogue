import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { store, fetchData } from '../helpers/store';
import * as actions from '../actions/actionCreators';

function CategoryForm({ categories, mealState, filterMeal }) {
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
const mapStateToProps = state => ({
  categories: state.mealReducer.listOfCategories,
  mealState: state.mealReducer.listOfMeals,
});

export default connect(mapStateToProps)(CategoryForm);
