
  async function loadReviews() {
    let reviews = {};
    console.log("loading reviews");
    console.log(fetch('/api/reviews'));
    try {
      // Get the latest reviews from the service
      const response = await fetch('/api/reviews');
      reviews= await response.json();
      console.log(reviews);
  
      // Save the review in case we go offline in the future
      localStorage.setItem('reviews', JSON.stringify(reviews));
    } catch {
      // If there was an error then just use the last saved reviews
      const reviewsText = localStorage.getItem('reviews');
      if (reviewsText) {
        reviews = JSON.parse(reviewsText);
      }
    }
  
    displayRestaurantReviews(reviews);
  }
  
  function displayRestaurantReviews(reviews) {
    const restaurantName = document.getElementById("restaurantName").firstChild.nodeValue;
    if (reviews.restaurant === restaurantName) {
      const theirReviews = document.createElement("section");
        theirReviews.innerHTML = `<div class="review">
          <p class="user-rate">User: <span class="result">${reviews.name}</span></p>
          <p class="user-rate">Rating: <span class="result">${reviews.rating}</span></p>
          <p class="review-text">${reviews.comment}</p>
          <p class="location">Location of review: <span class="result">${reviews.location}</span></p>
          <p class="date">${reviews.date}</p>
          </div>`;
      document.querySelector('.restaurantReviews').appendChild(theirReviews);
    }
  } 