import React, { useEffect } from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { store, fetchData }  from '../helpers/store'
import * as actions from '../actions/actionCreators'
import Desserts from '../containers/Desserts';
import TopCategory from '../containers/TopCategory';
import NewsLetter from '../components/NewsLetter';

function MealPage({mealState}) {
    useEffect(() => {
        store.dispatch(
          fetchData('https://www.themealdb.com/api/json/v1/1/search.php?f=b', actions.listOfMealsAction)
        )
    },[]);
    console.log(mealState)
    return (
        <div className="meals-body">
          <div className="meals-left">
              {
                  mealState
                  .slice(0, 12)
                  .map(meal => (
                    <Link key={meal.idMeal} to={`/meals/${meal.idMeal}`}>
                    <div className="meal-card">
                      <p>{meal.strCategory}</p>
                      <img src={meal.strMealThumb} alt={meal.strMeal}/>
                      <h1>{meal.strMeal}</h1>
                    </div>
                  </Link>
                  ))
              }
          </div>
            <div className="meals-right">      
                <TopCategory />
                <Desserts />
                <NewsLetter />
              </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        mealState: state.listOfMeals
    }
}

export default connect(mapStateToProps)(MealPage)
