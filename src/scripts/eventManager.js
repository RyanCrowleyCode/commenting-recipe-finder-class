// this function funs when the attachEventListenerToSearchButton function runs. The ultimate outcome is updating the DOM with the search results.
const handleSearch = event => {
  // this targets the input text box
  const inputField = document.querySelector("input")
  console.log("user input", inputField.value)

  // This calls the searchRecipes function, defined in apiManager.js
  searchRecipes(inputField.value)
  // response is the result of the fetch call above, after that fetch call is converted from json to js
  .then(response => {
    // this calls the displayRecipeHtml function, which is defined in searchResultsManager.js
    displayRecipeHtml(response.recipes)
    // This clears the text out of search box after the search results are displayed.
    inputField.value = ""
  })
}

// This event listener targets the search button, and whenever that button gets clicked, it calls the handle search function.
const attachEventListenerToSearchButton = () => {
  // searchButton variable is targeting the search button on the DOM
  const searchButton = document.getElementById("search-button")
  // adding an event listener, so that when the search button is clicked, the handleSearch function is called
  searchButton.addEventListener("click", handleSearch)
}
