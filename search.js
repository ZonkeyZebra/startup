//simulates results from a search. Will be utitlizing an API for this in the future.
function submit() {
    const results = document.querySelector('.results');
      results.innerHTML = `<h3>Results:</h3>
      <div class="review">
      <p class="restaurant">Restaurant</p>
      <img class="restaurant-logo" alt="restaurant-logo" height="50" width="50" src="../Images/Restaurant-logo-placeholder.png"/>
      <p class="average-rate">Average Rating: <span class="result">4.5</span></p>
      <p class="review-text">This restaurant was is great!</p>
      <p class="location">Location of review: <span class="result">SLC, Utah</span></p>
      <p class="date">September 26, 2020</p>
      <button type="submit" class="btn btn-outline-light">Leave your own review?</button>
  </div>
  <br/>
  <div class="review">
      <p class="restaurant">Restaurant</p>
      <img class="restaurant-logo" alt="restaurant-logo" height="50" width="50" src="../Images/Restaurant-logo-placeholder.png"/>
      <p class="average-rate">Average Rating: <span class="result">2</span></p>
      <p class="review-text">This place is terrible, the fries were cold.</p>
      <p class="location">Location of review: <span class="result">Provo, Utah</span></p>
      <p class="date">September 25, 2019</p>
      <button type="submit" class="btn btn-outline-light">Leave your own review?</button>
  </div>`;
}