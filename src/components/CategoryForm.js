import React, { useState, useEffect } from 'react'

function CategoryForm() {
  const [category, setCategory] = useState([])
  const fetchCategory = async () => {
    const categories = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
    const data = await categories.json()
    setCategory(data.meals)
  }
  useEffect(() => {
    fetchCategory()
  })
  return (
    <form>
      <select>
      <option>Categories</option>
        {
          category.map((cat, id) => (
            <option key={id} value={cat.strCategory}>{cat.strCategory}</option>
          ))
        }
      </select>
    </form>
  )
}

export default CategoryForm
