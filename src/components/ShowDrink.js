import React, { useEffect, useState } from 'react';


function ShowDrink({match}) {
    const [detail, setDetail] = useState([]);
    const fetchDrinks = async () => {
        try {
            const drinksFetch = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${match.params.id}`)
           const data = await drinksFetch.json();
            setDetail(data.meals)
        } catch (error) {
            console.error(error)
        }
      }
      useEffect(() => {
        fetchDrinks()
      });
    return (
        <div>
          {
            detail.map(item => (
              <div key= {item.idMeal}>
                <h1>{item.strMeal}</h1>
                <img src={item.strMealThumb} alt=""/>
              </div>
            ))
          }
        </div>
    )
}

export default ShowDrink
