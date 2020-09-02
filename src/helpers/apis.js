const fetchRandImg = async () => {
  const fetchMeal = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
  const data = await fetchMeal.json();
  return data.meals;
};

export {
  fetchRandImg,
};
