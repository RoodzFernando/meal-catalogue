import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import {store, fetchData} from '../helpers/store'
import * as actions from '../actions/actionCreators'

function Desserts({desserts}) {
  useEffect(() => {
    store.dispatch(
      fetchData('https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert', actions.listOfDessertsAction)
    )
  }, [])
  return (
    <div className="desert-card">
      <div>
        {
          desserts.map(dessert => (
            <>
            <h3 key={dessert.idMeal}>{dessert.strMeal}</h3>
            <img src={dessert.strMealThumb} alt=""/>
            </>
          ))
        }
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    desserts: state.listOfDessert.splice(5,4)
  }
}


export default connect(mapStateToProps)(Desserts)
