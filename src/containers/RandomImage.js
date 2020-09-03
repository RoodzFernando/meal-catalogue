import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { store, fetchData } from '../helpers/store';
import * as actions from '../actions/actionCreators';

function RandomImage({ randomImg }) {
  useEffect(() => {
    store.dispatch(
      fetchData('https://www.themealdb.com/api/json/v1/1/random.php', actions.randomMealAction),
    );
  }, []);
  return (
    <div className="bread-crumb">
      {
        randomImg.map(item => (
          <img key={item.idMeal} src={item.strMealThumb} alt="" />
        ))
      }
    </div>
  );
}
const mapStateToProps = state => ({
  randomImg: state.mealReducer.randomMeal,
});
export default connect(mapStateToProps)(RandomImage);
