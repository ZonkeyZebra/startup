function loadRestaurantReviews() {
    console.log("hello?");
  
    console.log(localStorage.getItem('review'));
  
    const stringReview = localStorage.getItem('review');
  
    let theRestaurantReviews = [];
    theRestaurantReviews = stringReview.split(",");
    console.log(theRestaurantReviews);

    const restaurantName = document.getElementById("restaurantName").firstChild.nodeValue;
    console.log(restaurantName);
    console.log(theRestaurantReviews[1]);

    if(theRestaurantReviews[1] === restaurantName) {
    const theirReviews = document.querySelector('.restaurantReviews');
    theirReviews.innerHTML = `<div class="review">
    <p class="user-rate">Rating: <span class="result">${theRestaurantReviews[2]}</span></p>
    <p class="review-text">${theRestaurantReviews[3]}</p>
    <p class="location">Location of review: <span class="result">${theRestaurantReviews[4]}</span></p>
    <p class="date">${theRestaurantReviews[5]}</p>
    </div>`;
    }
  
    
  }