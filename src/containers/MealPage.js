import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { mealAction } from '../actions';
import { store } from '../index'

function MealPage({mealState, viewMeal}) {
    const [meals, setmeals] = useState([]);
    const fetchMeal = async () => {
        try {
          const mealFetch = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=e')
           const data = await mealFetch.json();
            setmeals(data.meals)
            // console.log(data.categories)
        } catch (error) {
            console.error(error)
        }
        }
    useEffect(() => {
        fetchMeal()
    },[]);
    // console.log('==========')
    // console.log(viewMeal(meals))
    // console.log(store.getState())
    // console.log('==========')
    return (
        <div className="meals-body">
            {
                meals
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
const mapDispatchToProps = dispatch => {
    return {
        viewMeal: drink => dispatch(mealAction(drink))
    }
}

const mapStateToProps = state => {
    return {
        mealState: state.meals
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MealPage)
