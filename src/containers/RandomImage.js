import React, { useState, useEffect } from 'react'
import {useSelector} from 'react-redux'
import { randMealAction } from '../actions'
import { connect } from 'react-redux'
import {store} from '../index'

function RandomImage({randFunc, randMeal}) {
  // const testState = useSelector(state => state.randRed)
  const [randImg, setRandImg] = useState([])
  const fetchRandImg = async () => {
    const fetchMeal = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    const data = await fetchMeal.json()
    return data.meals;
  }
  useEffect(() => {
    // setRandImg(fetchRandImg())
    // return () => {
    //   console.log('unmounted')
    // }
  }, [])
  randFunc(randImg)
  // console.log('======store=========')
  // console.log(randFunc(randImg))
  // console.log(store.getState())
  // console.log(randMeal)
  // console.log('======Redux=========')
  // console.log('======store=========')
  return (
    <div className="bread-crumb">
    <h1>yesy</h1>
    {/* {
      randImg.map(img => (
        <img key={img.idMeal} src={img.strMealThumb} alt=""/>
      ))

    } */}
    </div>
  )
}
const mapStateToProps = state => ({
    randMeal: state.randRed
})

const mapDispatchToProps = dispatch => {
  return {
    randFunc: meal => dispatch(randMealAction(meal))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RandomImage)
