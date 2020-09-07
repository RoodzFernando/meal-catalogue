/* eslint-disable quote-props */
/* eslint-disable quotes */
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import React from 'react';
import Home from '../components/Home';

const mockStore = configureStore({});

describe('Test the Home component and its related component', () => {
  let store;
  let component;
  beforeEach(() => {
    store = mockStore({
      mealReducer: {
        listOfMeals: [
          {
            "idMeal": "52767",
            "strMeal": "Bakewell tart",
            "strDrinkAlternate": null,
            "strCategory": "Dessert",
            "strArea": "British",
            "strInstructions": "To make the pastry, measure the flour into a bowl and rub in the butter with your fingertips until the mixture resembles fine breadcrumbs. Add the water, mixing to form a soft dough.\r\nRoll out the dough on a lightly floured work surface and use to line a 20cm/8in flan tin. Leave in the fridge to chill for 30 minutes.\r\nPreheat the oven to 200C/400F/Gas 6 (180C fan).\r\nLine the pastry case with foil and fill with baking beans. Bake blind for about 15 minutes, then remove the beans and foil and cook for a further five minutes to dry out the base.\r\nFor the filing, spread the base of the flan generously with raspberry jam.\r\nMelt the butter in a pan, take off the heat and then stir in the sugar. Add ground almonds, egg and almond extract. Pour into the flan tin and sprinkle over the flaked almonds.\r\nBake for about 35 minutes. If the almonds seem to be browning too quickly, cover the tart loosely with foil to prevent them burning.",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/wyrqqq1468233628.jpg",
            "strTags": "Tart,Baking,Alcoholic",
            "strYoutube": "https://www.youtube.com/watch?v=1ahpSTf_Pvk",
            "strIngredient1": "plain flour",
            "strIngredient2": "chilled butter",
            "strIngredient3": "cold water",
            "strIngredient4": "raspberry jam",
            "strIngredient5": "butter",
            "strIngredient6": "caster sugar",
            "strIngredient7": "ground almonds",
            "strIngredient8": "free-range egg, beaten",
            "strIngredient9": "almond extract",
            "strIngredient10": "flaked almonds",
            "strIngredient11": "",
            "strIngredient12": "",
            "strIngredient13": "",
            "strIngredient14": "",
            "strIngredient15": "",
            "strIngredient16": null,
            "strIngredient17": null,
            "strIngredient18": null,
            "strIngredient19": null,
            "strIngredient20": null,
            "strMeasure1": "175g/6oz",
            "strMeasure2": "75g/2½oz",
            "strMeasure3": "2-3 tbsp",
            "strMeasure4": "1 tbsp",
            "strMeasure5": "125g/4½oz",
            "strMeasure6": "125g/4½oz",
            "strMeasure7": "125g/4½oz",
            "strMeasure8": "1",
            "strMeasure9": "½ tsp",
            "strMeasure10": "50g/1¾oz",
            "strMeasure11": "",
            "strMeasure12": "",
            "strMeasure13": "",
            "strMeasure14": "",
            "strMeasure15": "",
            "strMeasure16": null,
            "strMeasure17": null,
            "strMeasure18": null,
            "strMeasure19": null,
            "strMeasure20": null,
            "strSource": null,
            "dateModified": null,
          },
          {
            "idMeal": "52792",
            "strMeal": "Bread and Butter Pudding",
            "strDrinkAlternate": null,
            "strCategory": "Dessert",
            "strArea": "British",
            "strInstructions": "Grease a 1 litre/2 pint pie dish with butter.\r\nCut the crusts off the bread. Spread each slice with on one side with butter, then cut into triangles.\r\nArrange a layer of bread, buttered-side up, in the bottom of the dish, then add a layer of sultanas. Sprinkle with a little cinnamon, then repeat the layers of bread and sultanas, sprinkling with cinnamon, until you have used up all of the bread. Finish with a layer of bread, then set aside.\r\nGently warm the milk and cream in a pan over a low heat to scalding point. Don't let it boil.\r\nCrack the eggs into a bowl, add three quarters of the sugar and lightly whisk until pale.\r\nAdd the warm milk and cream mixture and stir well, then strain the custard into a bowl.\r\nPour the custard over the prepared bread layers and sprinkle with nutmeg and the remaining sugar and leave to stand for 30 minutes.\r\nPreheat the oven to 180C/355F/Gas 4.\r\nPlace the dish into the oven and bake for 30-40 minutes, or until the custard has set and the top is golden-brown.",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/xqwwpy1483908697.jpg",
            "strTags": "Pudding,Brunch",
            "strYoutube": "https://www.youtube.com/watch?v=Vz5W1-BmOE4",
            "strIngredient1": "butter",
            "strIngredient2": "bread",
            "strIngredient3": "sultanas",
            "strIngredient4": "cinnamon",
            "strIngredient5": "milk",
            "strIngredient6": "double cream",
            "strIngredient7": "eggs",
            "strIngredient8": "sugar",
            "strIngredient9": "nutmeg",
            "strIngredient10": "",
            "strIngredient11": "",
            "strIngredient12": "",
            "strIngredient13": "",
            "strIngredient14": "",
            "strIngredient15": "",
            "strIngredient16": "",
            "strIngredient17": "",
            "strIngredient18": "",
            "strIngredient19": "",
            "strIngredient20": "",
            "strMeasure1": "25g/1oz",
            "strMeasure2": "8 thin slices",
            "strMeasure3": "50g/2oz",
            "strMeasure4": "2 tsp",
            "strMeasure5": "350ml/12fl",
            "strMeasure6": "50ml/2fl oz",
            "strMeasure7": "2 free-range",
            "strMeasure8": "25g/1oz",
            "strMeasure9": "grated, to taste",
            "strMeasure10": "",
            "strMeasure11": "",
            "strMeasure12": "",
            "strMeasure13": "",
            "strMeasure14": "",
            "strMeasure15": "",
            "strMeasure16": "",
            "strMeasure17": "",
            "strMeasure18": "",
            "strMeasure19": "",
            "strMeasure20": "",
            "strSource": "https://cooking.nytimes.com/recipes/1018529-coq-au-vin",
            "dateModified": null,
          },
          {
            "idMeal": "52803",
            "strMeal": "Beef Wellington",
            "strDrinkAlternate": null,
            "strCategory": "Beef",
            "strArea": "British",
            "strInstructions": "Put the mushrooms into a food processor with some seasoning and pulse to a rough paste. Scrape the paste into a pan and cook over a high heat for about 10 mins, tossing frequently, to cook out the moisture from the mushrooms. Spread out on a plate to cool.\r\nHeat in a frying pan and add a little olive oil. Season the beef and sear in the hot pan for 30 secs only on each side. (You don't want to cook it at this stage, just colour it). Remove the beef from the pan and leave to cool, then brush all over with the mustard.\r\nLay a sheet of cling film on a work surface and arrange the Parma ham slices on it, in slightly overlapping rows. With a palette knife, spread the mushroom paste over the ham, then place the seared beef fillet in the middle. Keeping a tight hold of the cling film from the edge, neatly roll the Parma ham and mushrooms around the beef to form a tight barrel shape. Twist the ends of the cling film to secure. Chill for 15-20 mins to allow the beef to set and keep its shape.\r\nRoll out the puff pastry on a floured surface to a large rectangle, the thickness of a £1 coin. Remove the cling film from the beef, then lay in the centre. Brush the surrounding pastry with egg yolk. Fold the ends over, the wrap the pastry around the beef, cutting off any excess. Turn over, so the seam is underneath, and place on a baking sheet. Brush over all the pastry with egg and chill for about 15 mins to let the pastry rest.\r\nHeat the oven to 200C, 400F, gas 6.\r\nLightly score the pastry at 1cm intervals and glaze again with beaten egg yolk. Bake for 20 minutes, then lower the oven setting to 180C, 350F, gas 4 and cook for another 15 mins. Allow to rest for 10-15 mins before slicing and serving with the side dishes of your choice. The beef should still be pink in the centre when you serve it.",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/vvpprx1487325699.jpg",
            "strTags": "Meat,Stew",
            "strYoutube": "https://www.youtube.com/watch?v=FS8u1RBdf6I",
            "strIngredient1": "mushrooms",
            "strIngredient2": "English Mustard",
            "strIngredient3": "Olive Oil",
            "strIngredient4": "Beef Fillet",
            "strIngredient5": "Parma ham",
            "strIngredient6": "Puff Pastry",
            "strIngredient7": "Flour",
            "strIngredient8": "Egg Yolks",
            "strIngredient9": null,
            "strIngredient10": null,
            "strIngredient11": null,
            "strIngredient12": null,
            "strIngredient13": null,
            "strIngredient14": null,
            "strIngredient15": null,
            "strIngredient16": null,
            "strIngredient17": null,
            "strIngredient18": null,
            "strIngredient19": null,
            "strIngredient20": null,
            "strMeasure1": "400g",
            "strMeasure2": "1-2tbsp",
            "strMeasure3": "Dash",
            "strMeasure4": "750g piece",
            "strMeasure5": "6-8 slices",
            "strMeasure6": "500g",
            "strMeasure7": "Dusting",
            "strMeasure8": "2 Beaten ",
            "strMeasure9": "",
            "strMeasure10": "",
            "strMeasure11": "",
            "strMeasure12": "",
            "strMeasure13": "",
            "strMeasure14": "",
            "strMeasure15": "",
            "strMeasure16": "",
            "strMeasure17": "",
            "strMeasure18": "",
            "strMeasure19": "",
            "strMeasure20": "",
            "strSource": "http://www.goodtoknow.co.uk/recipes/164868/Gordon-Ramsay-s-beef-Wellington",
            "dateModified": null,
          },
        ],
        listOfDessert: [
          {
            "strMeal": "Apple & Blackberry Crumble",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/xvsurr1511719182.jpg",
            "idMeal": "52893",
          }, {
            "strMeal": "Apple Frangipan Tart",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/wxywrq1468235067.jpg",
            "idMeal": "52768",
          }, {
            "strMeal": "Bakewell tart",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/wyrqqq1468233628.jpg",
            "idMeal": "52767",
          }, {
            "strMeal": "Banana Pancakes",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/sywswr1511383814.jpg",
            "idMeal": "52855",
          }, {
            "strMeal": "Battenberg Cake",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/ywwrsp1511720277.jpg",
            "idMeal": "52894",
          }, {
            "strMeal": "BeaverTails",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/ryppsv1511815505.jpg",
            "idMeal": "52928",
          }, {
            "strMeal": "Blackberry Fool",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/rpvptu1511641092.jpg",
            "idMeal": "52891",
          }, {
            "strMeal": "Bread and Butter Pudding",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/xqwwpy1483908697.jpg",
            "idMeal": "52792",
          }, {
            "strMeal": "Budino Di Ricotta",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/1549542877.jpg",
            "idMeal": "52961",
          }, {
            "strMeal": "Canadian Butter Tarts",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/wpputp1511812960.jpg",
            "idMeal": "52923",
          }, {
            "strMeal": "Carrot Cake",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/vrspxv1511722107.jpg",
            "idMeal": "52897",
          }, {
            "strMeal": "Cashew Ghoriba Biscuits",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/t3r3ka1560461972.jpg",
            "idMeal": "52976",
          }, {
            "strMeal": "Chelsea Buns",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/vqpwrv1511723001.jpg",
            "idMeal": "52898",
          }, {
            "strMeal": "Chinon Apple Tarts",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/qtqwwu1511792650.jpg",
            "idMeal": "52910",
          }, {
            "strMeal": "Choc Chip Pecan Pie",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/rqvwxt1511384809.jpg",
            "idMeal": "52856",
          }, {
            "strMeal": "Chocolate Avocado Mousse",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/uttuxy1511382180.jpg",
            "idMeal": "52853",
          }, {
            "strMeal": "Chocolate Caramel Crispy",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/1550442508.jpg",
            "idMeal": "52966",
          }, {
            "strMeal": "Chocolate Gateau",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/tqtywx1468317395.jpg",
            "idMeal": "52776",
          }, {
            "strMeal": "Chocolate Raspberry Brownies",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/yypvst1511386427.jpg",
            "idMeal": "52860",
          }, {
            "strMeal": "Chocolate Souffle",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/twspvx1511784937.jpg",
            "idMeal": "52905",
          }, {
            "strMeal": "Christmas cake",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/ldnrm91576791881.jpg",
            "idMeal": "52990",
          }, {
            "strMeal": "Christmas Pudding Flapjack",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/vvusxs1483907034.jpg",
            "idMeal": "52788",
          }, {
            "strMeal": "Christmas Pudding Trifle",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/r33cud1576791081.jpg",
            "idMeal": "52989",
          }, {
            "strMeal": "Classic Christmas pudding",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/1d85821576790598.jpg",
            "idMeal": "52988",
          }, {
            "strMeal": "Dundee cake",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/wxyvqq1511723401.jpg",
            "idMeal": "52899",
          }, {
            "strMeal": "Eccles Cakes",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/wtqrqw1511639627.jpg",
            "idMeal": "52888",
          }, {
            "strMeal": "Eton Mess",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/uuxwvq1483907861.jpg",
            "idMeal": "52791",
          }, {
            "strMeal": "Honey Yogurt Cheesecake",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/y2irzl1585563479.jpg",
            "idMeal": "53007",
          }, {
            "strMeal": "Hot Chocolate Fudge",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/xrysxr1483568462.jpg",
            "idMeal": "52787",
          }, {
            "strMeal": "Jam Roly-Poly",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/ysqupp1511640538.jpg",
            "idMeal": "52890",
          }, {
            "strMeal": "Key Lime Pie",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/qpqtuu1511386216.jpg",
            "idMeal": "52859",
          }, {
            "strMeal": "Krispy Kreme Donut",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/4i5cnx1587672171.jpg",
            "idMeal": "53015",
          }, {
            "strMeal": "Madeira Cake",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/urtqut1511723591.jpg",
            "idMeal": "52900",
          }, {
            "strMeal": "Mince Pies",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/qe8pf51576795532.jpg",
            "idMeal": "52991",
          }, {
            "strMeal": "Nanaimo Bars",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/vwuprt1511813703.jpg",
            "idMeal": "52924",
          }, {
            "strMeal": "New York cheesecake",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/swttys1511385853.jpg",
            "idMeal": "52858",
          }, {
            "strMeal": "Pancakes",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/rwuyqx1511383174.jpg",
            "idMeal": "52854",
          }, {
            "strMeal": "Parkin Cake",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/qxuqtt1511724269.jpg",
            "idMeal": "52902",
          }, {
            "strMeal": "Peach & Blueberry Grunt",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/ssxvup1511387476.jpg",
            "idMeal": "52862",
          }, {
            "strMeal": "Peanut Butter Cheesecake",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/qtuuys1511387068.jpg",
            "idMeal": "52861",
          }, {
            "strMeal": "Peanut Butter Cookies",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/1544384070.jpg",
            "idMeal": "52958",
          }, {
            "strMeal": "Pear Tarte Tatin",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/rxvxrr1511797671.jpg",
            "idMeal": "52916",
          }, {
            "strMeal": "Polskie Naleśniki (Polish Pancakes)",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/58bkyo1593350017.jpg",
            "idMeal": "53022",
          }, {
            "strMeal": "Pouding chomeur",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/yqqqwu1511816912.jpg",
            "idMeal": "52932",
          }, {
            "strMeal": "Pumpkin Pie",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/usuqtp1511385394.jpg",
            "idMeal": "52857",
          }, {
            "strMeal": "Rock Cakes",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/tqrrsq1511723764.jpg",
            "idMeal": "52901",
          }, {
            "strMeal": "Rocky Road Fudge",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/vtxyxv1483567157.jpg",
            "idMeal": "52786",
          }, {
            "strMeal": "Rogaliki (Polish Croissant Cookies)",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/7mxnzz1593350801.jpg",
            "idMeal": "53024",
          }, {
            "strMeal": "Salted Caramel Cheescake",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/xqrwyr1511133646.jpg",
            "idMeal": "52833",
          }, {
            "strMeal": "Spotted Dick",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/xqvyqr1511638875.jpg",
            "idMeal": "52886",
          }, {
            "strMeal": "Sticky Toffee Pudding",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/xqqqtu1511637379.jpg",
            "idMeal": "52883",
          }, {
            "strMeal": "Sticky Toffee Pudding Ultimate",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/xrptpq1483909204.jpg",
            "idMeal": "52793",
          }, {
            "strMeal": "Strawberry Rhubarb Pie",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/178z5o1585514569.jpg",
            "idMeal": "53005",
          }, {
            "strMeal": "Sugar Pie",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/yrstur1511816601.jpg",
            "idMeal": "52931",
          }, {
            "strMeal": "Summer Pudding",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/rsqwus1511640214.jpg",
            "idMeal": "52889",
          }, {
            "strMeal": "Tarte Tatin",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/ryspuw1511786688.jpg",
            "idMeal": "52909",
          }, {
            "strMeal": "Timbits",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/txsupu1511815755.jpg",
            "idMeal": "52929",
          }, {
            "strMeal": "Treacle Tart",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/wprvrw1511641295.jpg",
            "idMeal": "52892",
          }, {
            "strMeal": "Tunisian Orange Cake",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/y4jpgq1560459207.jpg",
            "idMeal": "52970",
          }, {
            "strMeal": "White chocolate creme brulee",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/uryqru1511798039.jpg",
            "idMeal": "52917",
          },
        ],
        listOfCategories: [
          {
            "strCategory": "Beef",
          }, {
            "strCategory": "Breakfast",
          }, {
            "strCategory": "Chicken",
          }, {
            "strCategory": "Dessert",
          }, {
            "strCategory": "Goat",
          }, {
            "strCategory": "Lamb",
          }, {
            "strCategory": "Miscellaneous",
          }, {
            "strCategory": "Pasta",
          }, {
            "strCategory": "Pork",
          }, {
            "strCategory": "Seafood",
          }, {
            "strCategory": "Side",
          }, {
            "strCategory": "Starter",
          }, {
            "strCategory": "Vegan",
          }, {
            "strCategory": "Vegetarian",
          },
        ],
        randomMeal: [
          {
            "idMeal": "52954",
            "strMeal": "Hot and Sour Soup",
            "strDrinkAlternate": null,
            "strCategory": "Pork",
            "strArea": "Chinese",
            "strInstructions": "STEP 1 - MAKING THE SOUP\r\nIn a wok add chicken broth and wait for it to boil.\r\nNext add salt, sugar, sesame seed oil, white pepper, hot pepper sauce, vinegar and soy sauce and stir for few seconds.\r\nAdd Tofu, mushrooms, black wood ear mushrooms to the wok.\r\nTo thicken the sauce, whisk together 1 Tablespoon of cornstarch and 2 Tablespoon of water in a bowl and slowly add to your soup until it's the right thickness.\r\nNext add 1 egg slightly beaten with a knife or fork and add it to the soup and stir for 8 seconds\r\nServe the soup in a bowl and add the bbq pork and sliced green onions on top.",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/1529445893.jpg",
            "strTags": "Soup",
          },
        ],
      },
      filter: "Categories",
    });
    component = renderer.create(
      <Provider store={store}>
        <Home />
      </Provider>,
    );
  });

  it('should render with given state from Redux store', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
