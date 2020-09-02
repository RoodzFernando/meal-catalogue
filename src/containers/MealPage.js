import React, { useEffect } from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { store, fetchData }  from '../helpers/store'
import * as actions from '../actions/actionCreators'

function MealPage({mealState}) {
    useEffect(() => {
        store.dispatch(
          fetchData('https://www.themealdb.com/api/json/v1/1/search.php?f=e', actions.listOfMealsAction)
        )
    },[]);
    return (
        <div className="meals-body">
            {
                mealState
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
    )
}

const mapStateToProps = state => {
    return {
        mealState: state.listOfMeals
    }
}

export default connect(mapStateToProps)(MealPage)
