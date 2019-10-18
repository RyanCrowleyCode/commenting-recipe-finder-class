// This function builds a string template for 2 html sections and places them on the DOM
const buildAndAppendSearchForm = () => {
  // the variable searchForm is a string template of the html for 2 sections. One of those sections contains a header, an input field, and a button. The other section is empty for now.
  const searchForm = `
  <section class="search-form">
    <h3>Search for recipes containing: </h3>
    <input type="text">
    <button id = "search-button">Search</button>
  </section>
  <section class="search-results"></section>
  `

  // this variable targets the container div on index.html so that we can manipulate the DOM
  const containerDiv = document.querySelector("#container")
  // here, we are updating that container div to now have the content defined in the searchForm variable above, on the DOM
  containerDiv.innerHTML = searchForm
}
