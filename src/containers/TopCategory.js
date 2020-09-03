import React from 'react';
import { connect } from 'react-redux';
import CategoryForm from './CategoryForm';
import Area from './Area';

function TopCategory({ categories }) {
  return (
    <div className="top-category">
      <p>Top Categories</p>
      <div>
        {
          categories.slice(0, 5).map(category => (
            <h3 key={category.strCategory}>{category.strCategory}</h3>
          ))
        }
        {/* <CategoryForm /> */}
        {/* <Area /> */}
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  categories: state.mealReducer.listOfCategories,
});

export default connect(mapStateToProps)(TopCategory);
