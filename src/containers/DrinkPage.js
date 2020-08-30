import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { beverageAction } from '../actions';

function DrinkPage({drinksState, viewDrink}) {
    const [drinks, setDrinks] = useState([]);
    useEffect(() => {
        const fetchDrinks = async () => {
            try {
                const drinksFetch = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
               const data = await drinksFetch.json();
                setDrinks(data.drinks)
            } catch (error) {
                console.error(error)
            }
            }
        fetchDrinks()
    },[drinks, viewDrink]);

    return (
        <div>
            {
                drinks
                .map(drink => (
                <Link to={`/drinks/${drink.idDrink}`}>
                <h1 key={drink.idDrink}>{drink.strDrink}</h1>
                <img key={drink.strIBA} src={drink.strDrinkThumb} alt={drink.strDrink}/>
                </Link>
                ))
            }
        </div>
    )
}
const mapDispatchToProps = dispatch => {
    return {
        viewDrink: drink => dispatch(beverageAction(drink))
    }
}

const mapStateToProps = state => {
    return {
        drinksState: state.drinks
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DrinkPage)
