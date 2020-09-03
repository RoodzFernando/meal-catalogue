import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { store, fetchData } from '../helpers/store';
import * as actions from '../actions/actionCreators';

function Area({ countries }) {
  useEffect(() => {
    store.dispatch(
      fetchData('https://www.themealdb.com/api/json/v1/1/list.php?a=list', actions.listOfCountriesAction),
    );
  }, []);
  return (
    <form>
      <select>
        <option>Countries</option>
        {
          countries.map((area, id) => (
            <option key={id} value={area.strArea}>{area.strArea}</option>
          ))
        }
      </select>
    </form>
  );
}

const mapStateToProps = state => ({
  countries: state.mealReducer.listOfCountries,
});

export default connect(mapStateToProps)(Area);
