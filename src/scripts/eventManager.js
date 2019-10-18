const handleSearch = event => {
  // console.log(event)
  const inputField = document.querySelector("input")
  console.log("user input", inputField.value)

  searchRecipes(inputField.value)
  .then(response => {
    // console.log(response.recipes)
    displayRecipeHtml(response.recipes)
    inputField.value = ""
  })
}

const attachEventListenerToSearchButton = () => {
  const searchButton = document.getElementById("search-button")
  searchButton.addEventListener("click", handleSearch)
}
