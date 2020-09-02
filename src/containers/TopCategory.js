import React from 'react'
import { connect } from 'react-redux'

function TopCategory({categories}) {

  return (
    <div className="top-category">
        <p>Top Category</p>
      <div>
        {
          categories.slice(0,5).map(category => (
            <h3 key={category.strCategory}>{category.strCategory}</h3>
          ))
        }
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    categories: state.listOfCategories
  }
}


export default connect(mapStateToProps)(TopCategory)
