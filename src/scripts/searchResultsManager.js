// This function returns a string template of what the HTML will be for one recipe.
const buildRecipeHtml = recipe => `
<article>
  <h4>${recipe.title}</h4>
  <img src="${recipe.image_url}" alt="Recipe Image">
  <p>
      <a href="${recipe.source_url}">Click here to see the full recipe</a>
  </p>
</article>
`

// this function takes in an array of recipes, iterates over them to turn each recipe into a string template for HTML, and then displays them on the DOM
const displayRecipeHtml = allRecipes => {
  // Empty string to build up
  let recipeResultsHtml = ""
  allRecipes.forEach(recipe => {
    // takes current recipe, makes it into an HTML string
    let recipeHtml = buildRecipeHtml(recipe)
    // adds current html string (that represents a recipe) into the running string of recipes called "recipesResultsHtml"
    recipeResultsHtml += recipeHtml
  });

  // targets the div on the DOM with the class "search-resuls"
  const searchResultsSection = document.querySelector(".search-results")
  // changes the innerHTML of the "search-results" div to be what is stored in the variable recipeResultsHtml
  searchResultsSection.innerHTML = recipeResultsHtml
}
