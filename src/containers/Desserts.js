import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { store, fetchData } from '../helpers/store';
import * as actions from '../actions/actionCreators';

function Desserts({ desserts }) {
  useEffect(() => {
    store.dispatch(
      fetchData('https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert', actions.listOfDessertsAction),
    );
  }, []);
  return (
    <div className="dessert-wrapper">
      <p>Top Desserts</p>
      <div className="desert-card">
        {
            desserts.map(dessert => (
              <Link key={dessert.strMeal} to={`/meals/${dessert.idMeal}`}>
                <div className="dessert-body">
                  <img src={dessert.strMealThumb} alt="" />
                  <h3 key={dessert.idMeal}>{dessert.strMeal}</h3>
                </div>
              </Link>
            ))
          }
      </div>
    </div>
  );
}

Desserts.propTypes = {
  desserts: PropTypes.arrayOf(PropTypes.shape({
    strMeal: PropTypes.string.isRequired,
  })).isRequired,
};

const mapStateToProps = state => ({
  desserts: state.mealReducer.listOfDessert.splice(5, 4),
});

export default connect(mapStateToProps)(Desserts);
