import React, { useState, useEffect } from 'react'

function IngredientsForm() {
  const [ingredients, setIngredients] = useState([])
  const fetchCategory = async () => {
    const ingredients = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
    const data = await ingredients.json()
    setCategory(data.meals)
  }
  useEffect(() => {
    fetchCategory()
  })
  return (
    <form>
      <select>
      <option>Ingredients</option>
        {
          ingredients.map((ingredient, id) => (
            <option key={id} value={ingredient.strCategory}>{ingredient.strCategory}</option>
          ))
        }
      </select>
    </form>
  )
}

export default IngredientsForm