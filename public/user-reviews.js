function getUserName() {
  return localStorage.getItem('userName');
}

function loadUserReviews() {
  console.log("hello?");

  //gets review array from local storage
  console.log(localStorage.getItem('review'));
  //
  console.log(localStorage.getItem('allReviews'));

  //splits the array since it's a string so I can look at individual values in the array
  const stringReview = localStorage.getItem('review');
  //
  const newStringReview = localStorage.getItem('allReviews');

  let theUserReviews = [];
  // theUserReviews = stringReview.split(",");
  theUserReviews = newStringReview.split(",");
  console.log(theUserReviews);

  //gives the user's review
  // const theirReviews = document.querySelector('.your-reviews');
  // theirReviews.innerHTML = `<h6>${theUserReviews[0]}'s Reviews:</h6>
  // <div class="review">
  // <p class="restaurant" style="text-decoration: underline;">${theUserReviews[1]}</p>
  // <p class="average-rate">Average Rating: <span class="result">4.5</span></p>
  // <p class="user-rate">Your Rating: <span class="result">${theUserReviews[2]}</span></p>
  // <p class="review-text">${theUserReviews[3]}</p>
  // <p class="location">Location of review: <span class="result">${theUserReviews[4]}</span></p>
  // <p class="date">${theUserReviews[5]}</p>`;

  // const theirReviews = document.createElement("section");
  // theirReviews.innerHTML = `<h6>${theUserReviews[0]}'s Reviews:</h6>
  // <div class="review">
  // <p class="restaurant" style="text-decoration: underline;">${theUserReviews[1]}</p>
  // <p class="average-rate">Average Rating: <span class="result">4.5</span></p>
  // <p class="user-rate">Your Rating: <span class="result">${theUserReviews[2]}</span></p>
  // <p class="review-text">${theUserReviews[3]}</p>
  // <p class="location">Location of review: <span class="result">${theUserReviews[4]}</span></p>
  // <p class="date">${theUserReviews[5]}</p>`;
  // document.querySelector('.your-reviews').appendChild(theirReviews);

  for (let i = 0; i < theUserReviews.length; i = i + 6) {
  const theirReviews = document.createElement("section");
  theirReviews.innerHTML = `<h6>${theUserReviews[i]}'s Reviews:</h6>
  <div class="review">
  <p class="restaurant" style="text-decoration: underline;">${theUserReviews[i+1]}</p>
  <p class="average-rate">Average Rating: <span class="result">4.5</span></p>
  <p class="user-rate">Your Rating: <span class="result">${theUserReviews[i+2]}</span></p>
  <p class="review-text">${theUserReviews[i+3]}</p>
  <p class="location">Location of review: <span class="result">${theUserReviews[i+4]}</span></p>
  <p class="date">${theUserReviews[i+5]}</p>`;
  document.querySelector('.your-reviews').appendChild(theirReviews);
  }
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

  displayUserReviews(reviews);
}

function displayUserReviews(reviews) {
  for (let i = 0; i < reviews.length; i = i + 6) {
    const theirReviews = document.createElement("section");
    theirReviews.innerHTML = `<h6>${reviews[i]}'s Reviews:</h6>
    <div class="review">
    <p class="restaurant" style="text-decoration: underline;">${reviews[i+1]}</p>
    <p class="average-rate">Average Rating: <span class="result">4.5</span></p>
    <p class="user-rate">Your Rating: <span class="result">${reviews[i+2]}</span></p>
    <p class="review-text">${reviews[i+3]}</p>
    <p class="location">Location of review: <span class="result">${reviews[i+4]}</span></p>
    <p class="date">${reviews[i+5]}</p>`;
    document.querySelector('.your-reviews').appendChild(theirReviews);
    }
}