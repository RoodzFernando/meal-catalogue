import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { store, fetchData } from '../helpers/store';
import * as actions from '../actions/actionCreators';

function CategoryForm({ categories, mealState }) {
  useEffect(() => {
    store.dispatch(
      fetchData('https://www.themealdb.com/api/json/v1/1/list.php?c=list', actions.listOfCategoriesAction),
    );
  }, []);

  const changeHandle = event => {
    const category = event.target.value;
    console.log(category);
    mealState.filter(cat => console.log(cat.strCategory === category));
  };
  return (
    <form>
      <select onChange={changeHandle}>
        <option>Categories</option>
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
  categories: state.listOfCategories,
  mealState: state.listOfMeals,
});

export default connect(mapStateToProps)(CategoryForm);
