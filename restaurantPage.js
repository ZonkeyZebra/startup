function loadRestaurantReviews() {
    console.log("hello?");

    //gets review array from local storage
    console.log(localStorage.getItem('review'));
  
    const stringReview = localStorage.getItem('review');

    //splits the array since it's a string so I can look at individual values in the array
    let theRestaurantReviews = [];
    theRestaurantReviews = stringReview.split(",");
    console.log(theRestaurantReviews);

    //gets restaurant name from the html file
    const restaurantName = document.getElementById("restaurantName").firstChild.nodeValue;
    console.log(restaurantName);
    console.log(theRestaurantReviews[1]);

    //checks to make sure that the restaurant is the same as  the review
    if(theRestaurantReviews[1] === restaurantName) {
    const theirReviews = document.querySelector('.restaurantReviews');
    theirReviews.innerHTML = `<div class="review">
    <p class="user-rate">User: <span class="result">${theRestaurantReviews[0]}</span></p>
    <p class="user-rate">Rating: <span class="result">${theRestaurantReviews[2]}</span></p>
    <p class="review-text">${theRestaurantReviews[3]}</p>
    <p class="location">Location of review: <span class="result">${theRestaurantReviews[4]}</span></p>
    <p class="date">${theRestaurantReviews[5]}</p>
    </div>`;
    }

    //prints avg
    const giveAvg = document.querySelector('#avgRate');
    giveAvg.innerHTML = `4.5`;
  
  }

  function getAverage() {
    
  }