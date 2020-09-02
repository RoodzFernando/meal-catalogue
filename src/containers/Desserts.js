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
    <div>
      <ul>
        {
          desserts.map(dessert => (
            <li key={dessert.idMeal}>{dessert.strMeal}</li>
          ))
        }
      </ul>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    desserts: state.listOfDessert.slice(0,4)
  }
}


export default connect(mapStateToProps)(Desserts)
