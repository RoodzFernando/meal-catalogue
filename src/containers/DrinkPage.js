import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { beverageAction } from '../actions';

function DrinkPage({mealState, viewMeal}) {
    const [meals, setmeals] = useState([]);
    const fecthMeal = async () => {
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
        fecthMeal()
    },[]);
    // console.log(meals)
    return (
        <div>
            {
                meals
                .map(meal => (
                  <Link key={meal.idMeal} to={`/meals/${meal.idMeal}`}>
                    <h1>{meal.strMeal}</h1>
                    <img src={meal.strMealThumb} alt={meal.strMeal}/>
                </Link>
                ))
            }
        </div>
    )
}
const mapDispatchToProps = dispatch => {
    return {
        viewMeal: drink => dispatch(beverageAction(drink))
    }
}

const mapStateToProps = state => {
    return {
        mealState: state.meals
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DrinkPage)
