import React from 'react'
import { connect } from 'react-redux'

function TopCategory({categories}) {

  return (
    <ul>
      {
        categories.slice(0,5).map(category => (
          <li key={category.strCategory}>{category.strCategory}</li>
        ))
      }
    </ul>
  )
}

const mapStateToProps = state => {
  return {
    categories: state.listOfCategories
  }
}


export default connect(mapStateToProps)(TopCategory)
