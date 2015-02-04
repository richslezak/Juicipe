//create a namespace 
var JP = JP || {};

// list of recipes
JP.recipes = [
  {
    "id": "redJuice001",
    "name": "Red Juice",
    "image": "img/juiceRed.jpg",
    "description": "The high quality vitamin C and other rich nutrients in carrot juice efficiently nourish the skin, preventing dry skin, psoriasis and other skin blemishes. It also has powerful cleansing properties that are effective in detoxifying the liver, which is overall effective for acne which can be caused by toxicity of the blood. Celery contains sodium, which has been called a youth maintainer in the body. It's loaded with minerals and contains vitamin C as well, which helps maintain elasticity of the skin. Apples contain vitamins A and C which prevent sagging skin, as well as copper for brightening and toning.", 
    "ingredients": [
      {"ingredientName": "Beats", "ingredientAmount": "1", "ingredientValue": ""},
      {"ingredientName": "Green Apple", "ingredientAmount": "", "ingredientValue": "half"},
      {"ingredientName": "Ginger", "ingredientAmount": "1", "ingredientValue": "inch"},
      {"ingredientName": "Lemon", "ingredientAmount": "0.5", "ingredientValue": ""},
      {"ingredientName": "Celery", "ingredientAmount": "2", "ingredientValue": "pieces"},
      {"ingredientName": "Chia Seeds", "ingredientAmount": "1", "ingredientValue": "tbsp"}
    ]
  },
  {
    "id": "greenJuice001",
    "name": "Green Juice",
    "image": "img/juiceGreen.jpg",
    "description": "Carrots have a cleansing action on the liver and helps it to release more bile, which will cause peristaltic action. This can help to relieve constipation and help with digestion.", 
    "ingredients": [
      {"ingredientName": "Kale", "ingredientAmount": "1", "ingredientValue": ""},
      {"ingredientName": "Green Apple", "ingredientAmount": "", "ingredientValue": "half"},
      {"ingredientName": "Ginger", "ingredientAmount": "1", "ingredientValue": "inch"},
      {"ingredientName": "Lemon", "ingredientAmount": "0.5", "ingredientValue": ""},
      {"ingredientName": "Chia Seeds", "ingredientAmount": "1", "ingredientValue": "tbsp"}
    ]
  },            
  {
    "id": "yellowJuice001",
    "name": "Yellow Juice",
    "image": "img/juiceYellow.jpg",
    "description": "Asparagus has 288 milligrams of potassium per cup. Potassium is known for reducing fat. It's also low in natural sodium and has no cholesterol, which is extremely helpful when trying to lose weight.", 
    "ingredients": [
      {"ingredientName": "Banana", "ingredientAmount": "1", "ingredientValue": ""},
      {"ingredientName": "Peach", "ingredientAmount": "", "ingredientValue": "half"},
      {"ingredientName": "Lemon", "ingredientAmount": "0.5", "ingredientValue": ""},
      {"ingredientName": "Orange", "ingredientAmount": "1", "ingredientValue": ""},
      {"ingredientName": "Chia Seeds", "ingredientAmount": "1", "ingredientValue": "tbsp"}
    ]
  } 
];



/* user generated recipe 
use form to take users input and generate a recipe in the specified format
append recipe to recipes and include in rest of display mechanics.r






*/

// create a new recipe
JP.recipe = {
    "id": "PurpleJuice001",
    "name": "Purple Juice",
    "image": "img/juicePurple.jpg",
    "description": "The high content of iron in beets regenerates and reactivates the red blood cells and supplies fresh oxygen to the body. The copper content in beets help make the iron more available to the body. A great blood builder.", 
    "ingredients": [
      {"ingredientName": "Banana", "ingredientAmount": "1", "ingredientValue": ""},
      {"ingredientName": "Peach", "ingredientAmount": "", "ingredientValue": "half"},
      {"ingredientName": "blueberries", "ingredientAmount": "handfull", "ingredientValue": ""},
      {"ingredientName": "Orange", "ingredientAmount": "1", "ingredientValue": ""},
      {"ingredientName": "Chia Seeds", "ingredientAmount": "1", "ingredientValue": "tbsp"}
    ]
  };

// add new recipe to recipes array
JP.recipes.push(JP.recipe);

/* 
NOTES:



TODO: 
Be able to choose any recipe from recipes and load it
do this by: choosing random recipe during page load
            user click
            search
            most popular (user vote)
            tags

Make a function that populates ALL dynamic data 
title subtitle description image recipe
            
*/


// randomizer for recipes 
JP.maximum = JP.recipes.length;
JP.minimum = 0;
JP.randomNumber = Math.floor(Math.random() * (JP.maximum - JP.minimum)) + JP.minimum;

// assign random number to var randomRecipe and use it as parameter to load the recipe data
//JP.randomRecipe = JP.randomNumber





// parse recipe and build a list
JP.parseRecipe = function(recipeNumber) {

  var list = $('.recipe .view');
  //first clear the existing list
  list.html("");

  // add the title of the drink to the html
  JP.recipeName = JP.recipes[recipeNumber].name;
  $(".drinkTitle").html(JP.recipeName);

  // add image with recipe
  JP.recipeImage = JP.recipes[recipeNumber].image;
  $(".juiceImage").attr("src", JP.recipeImage);

  // add description
  JP.recipeDescription = JP.recipes[recipeNumber].description;
  $(".recipeDescription").html(JP.recipeDescription);

  // loop through the ingredients and add them to a list 
  $.each(JP.recipes[recipeNumber].ingredients, function() {

    // first check to see if there is an existing list
    // if there is a list, clear the list
    // then append new list

    var listItem = $('<li/>'),
        html = listItem.append('<span>' + this.ingredientAmount + '</span> <span>' + this.ingredientValue + '</span> <span>' + this.ingredientName + '</span>');

    list.append(html)

  });
};







//test click buttons etc
$("#linkTest").on('click', function() {
  //first clear the existing list
  //$('.recipe .view').html("");
  this.preventDefault;
  JP.parseRecipe(1);
});

JP.clickRecipe = function(x) {
  //this.preventDefault;
  JP.parseRecipe(x);
};









$(document).ready( function() {
  $(document).foundation();
  JP.parseRecipe(JP.randomNumber);





});