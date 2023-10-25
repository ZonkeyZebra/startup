// **For Future**: have more than one review, right now it is local storage that is overwritten every time (simulating for DB). Find avg.

function loadUserReviews() {
  console.log("hello?");

  //gets review array from local storage
  console.log(localStorage.getItem('review'));

  //splits the array since it's a string so I can look at individual values in the array
  const stringReview = localStorage.getItem('review');

  let theUserReviews = [];
  theUserReviews = stringReview.split(",");
  console.log(theUserReviews);

  //gives the user's review
  const theirReviews = document.querySelector('.your-reviews');
  theirReviews.innerHTML = `<h6>${theUserReviews[0]}'s Reviews:</h6>
  <div class="review">
  <p class="restaurant" style="text-decoration: underline;">${theUserReviews[1]}</p>
  <p class="average-rate">Average Rating: <span class="result">4.5</span></p>
  <p class="user-rate">Your Rating: <span class="result">${theUserReviews[2]}</span></p>
  <p class="review-text">${theUserReviews[3]}</p>
  <p class="location">Location of review: <span class="result">${theUserReviews[4]}</span></p>
  <p class="date">${theUserReviews[5]}</p>`;
}