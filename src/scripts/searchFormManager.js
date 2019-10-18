const buildAndAppendSearchForm = () => {
  const searchForm = `
  <section class="search-form">
    <h3>Search for recipes containing: </h3>
    <input type="text">
    <button id = "search-button">Search</button>
  </section>
  <section class="search-results"></section>
  `
  // console.log(searchForm)

  const containerDiv = document.querySelector("#container")
  containerDiv.innerHTML = searchForm
}
