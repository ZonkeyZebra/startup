function loadUserReviews() {
  console.log("hello?");
  // let reviews = [];
  // const userReviews = localStorage.getItem('review');
  // if (userReviews) {
  //   reviews = JSON.parse(userReviews);
  // }

  console.log(localStorage.getItem('review'));

  const stringReview = localStorage.getItem('review');

  let theUserReviews = [];
  theUserReviews = stringReview.split(",");
  console.log(theUserReviews);

  const theirReviews = document.querySelector('.your-reviews');
  theirReviews.innerHTML = `<div class="review">
  <p class="restaurant">${theUserReviews[1]}</p>
  <img class="restaurant-logo" alt="restaurant-logo" height="50" width="50" src="../Images/Restaurant-logo-placeholder.png"/>
  <p class="average-rate">Average Rating: <span class="result">4.5</span></p>
  <p class="user-rate">Your Rating: <span class="result">${theUserReviews[2]}</span></p>
  <p class="review-text">${theUserReviews[3]}</p>
  <p class="location">Location of review: <span class="result">${theUserReviews[4]}</span></p>
  <p class="date">${theUserReviews[5]}</p>`;
}