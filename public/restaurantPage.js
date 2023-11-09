function loadRestaurantReviews() {
    console.log("hello?");

    //gets review array from local storage
    console.log(localStorage.getItem('review'));
  
    const stringReview = localStorage.getItem('review');
    const fullStringReview = localStorage.getItem('allReviews');

    //splits the array since it's a string so I can look at individual values in the array
    let theRestaurantReviews = [];
    // theRestaurantReviews = stringReview.split(",");
    theRestaurantReviews = fullStringReview.split(",");
    console.log(theRestaurantReviews);

    //gets restaurant name from the html file
    const restaurantName = document.getElementById("restaurantName").firstChild.nodeValue;
    console.log(restaurantName);
    console.log(theRestaurantReviews[1]);

    //checks to make sure that the restaurant is the same as  the review
    // if(theRestaurantReviews[1] === restaurantName) {
    // const theirReviews = document.querySelector('.restaurantReviews');
    // theirReviews.innerHTML = `<div class="review">
    // <p class="user-rate">User: <span class="result">${theRestaurantReviews[0]}</span></p>
    // <p class="user-rate">Rating: <span class="result">${theRestaurantReviews[2]}</span></p>
    // <p class="review-text">${theRestaurantReviews[3]}</p>
    // <p class="location">Location of review: <span class="result">${theRestaurantReviews[4]}</span></p>
    // <p class="date">${theRestaurantReviews[5]}</p>
    // </div>`;
    // }

    for (let i = 0; i < theRestaurantReviews.length; i = i + 6) {
      if(theRestaurantReviews[i+1] === restaurantName) {
        const theirReviews = document.createElement("section");
        theirReviews.innerHTML = `<div class="review">
          <p class="user-rate">User: <span class="result">${theRestaurantReviews[i]}</span></p>
          <p class="user-rate">Rating: <span class="result">${theRestaurantReviews[i+2]}</span></p>
          <p class="review-text">${theRestaurantReviews[i+3]}</p>
          <p class="location">Location of review: <span class="result">${theRestaurantReviews[i+4]}</span></p>
          <p class="date">${theRestaurantReviews[i+5]}</p>
          </div>`;
      document.querySelector('.restaurantReviews').appendChild(theirReviews);
      }
    }

    //prints avg
    const giveAvg = document.querySelector('#avgRate');
    giveAvg.innerHTML = `4.5`;
  
  }

  function getAverage() {
    
  }

  async function loadReviews() {
    let reviews = [];
    try {
      // Get the latest high scores from the service
      const response = fetch('/api/reviews');
      reviews = response.json();
  
      // Save the scores in case we go offline in the future
      localStorage.setItem('reviews', JSON.stringify(reviews));
    } catch {
      // If there was an error then just use the last saved scores
      const reviewsText = localStorage.getItem('reviews');
      if (reviewsText) {
        reviews = JSON.parse(reviewsText);
      }
    }
  
    displayRestaurantReviews(reviews);
  }
  
  function displayRestaurantReviews(reviews) {
    for (let i = 0; i < reviews.length; i = i + 6) {
      if(reviews[i+1] === restaurantName) {
        const theirReviews = document.createElement("section");
        theirReviews.innerHTML = `<div class="review">
          <p class="user-rate">User: <span class="result">${reviews[i]}</span></p>
          <p class="user-rate">Rating: <span class="result">${reviews[i+2]}</span></p>
          <p class="review-text">${reviews[i+3]}</p>
          <p class="location">Location of review: <span class="result">${reviews[i+4]}</span></p>
          <p class="date">${reviews[i+5]}</p>
          </div>`;
      document.querySelector('.restaurantReviews').appendChild(theirReviews);
      }
    }
  } 