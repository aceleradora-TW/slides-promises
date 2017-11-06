const axios = require('axios')
const {green} = require('colors')
const endpoint = 'http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3'

const getResults = (response) => response.data.results

const mapToRecipes = (results) => results.map(({title, ingredients}) => ({title, ingredients}))

const formatRecipes = (recipes) => recipes.map(({title, ingredients})=> `${green(title.trim().replace('\n', ''))} \n\t-> ${ingredients}`)

const printAllRecipes = (recipes) => recipes.forEach(recipe => console.log('\n', recipe, '\n'))

axios
  .get(endpoint)
  .then(getResults)
  .then(mapToRecipes)
  .then(formatRecipes)
  .then(printAllRecipes)
  .catch(error => console.log(error.message))

