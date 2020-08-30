import React, { useEffect, useState } from 'react';


function ShowDrink({match}) {
    const [detail, setDetail] = useState([]);
    useEffect(() => {
        const fetchDrinks = async () => {
            try {
                const drinksFetch = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${match.params.id}`)
               const data = await drinksFetch.json();
                setDetail(data.drinks)
            } catch (error) {
                console.error(error)
            }
            }
        fetchDrinks()
    },[detail]);
    return (
        <div>
            <h1>Drink detail</h1>
            {
                detail.map(item => (
                    <>
                <h1>{item.strDrink}</h1>
                <img src={item.strDrinkThumb} alt=""/>
                </>
                ))
            }
        </div>
    )
}

export default ShowDrink
