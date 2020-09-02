import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {store, fetchData} from '../helpers/store'
import * as actions from '../actions/actionCreators'

function CategoryForm({categories}) {
  useEffect(() => {
    store.dispatch(
      fetchData('https://www.themealdb.com/api/json/v1/1/list.php?c=list', actions.listOfCategoriesAction)
    )
  }, [])
  return (
    <form>
      <select>
      <option>Categories</option>
        {
          categories.map((cat, id) => (
            <option key={id} value={cat.strCategory}>{cat.strCategory}</option>
          ))
        }
      </select>
    </form>
  )
}
const mapStateToProps = state => {
  return {
    categories: state.listOfCategories
  }
}


export default connect(mapStateToProps)(CategoryForm)
