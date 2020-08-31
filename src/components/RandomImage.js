import React, { useState, useEffect } from 'react'

function RandomImage() {
  const [randImg, setRandImg] = useState([])
  const fetchRandImg = async () => {
    const fetchMeal = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    const data = await fetchMeal.json()
    setRandImg(data.meals)
  }
  useEffect(() => {
    fetchRandImg()
  }, [])
  return (
    <div className="bread-crumb">
    {
      randImg.map(img => (
        <img key={img.idMeal} src={img.strMealThumb} alt=""/>
      ))

    }
    </div>
  )
}

export default RandomImage
