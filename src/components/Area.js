import React, { useState, useEffect } from 'react'

function Area() {
  const [areas, setAreas] = useState([])
  const fetchArea = async () => {
    const areas = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
    const data = await areas.json()
    setAreas(data.meals)
  }
  useEffect(() => {
    fetchArea()
  })
  return (
    <form>
      <select>
      <option>Countries</option>
        {
          areas.map((area, id) => (
            <option key={id} value={area.strArea}>{area.strArea}</option>
          ))
        }
      </select>
    </form>
  )
}

export default Area
