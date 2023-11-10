  //gets a users username they logged in with
  function getUserName() {
    return localStorage.getItem('userName');
  }

  let allReviews = [];

  //gets the values inputted from the form and saves them to local storage
  function submitReview() {
    console.log("Hello?");
    const userName = this.getUserName();
    const restaurantEl = document.querySelector("#selectRestaurant");
    localStorage.setItem("restaurant", restaurantEl.value);
    console.log(restaurantEl);

    const ratingEl = document.querySelector("#selectRating");
    localStorage.setItem("rating", ratingEl.value);

    const commentEl = document.querySelector("#leaveComment");
    localStorage.setItem("comment", commentEl.value);

    const locationEl = document.querySelector("#leaveLocation");
    localStorage.setItem("location", locationEl.value);

    const date = new Date().toLocaleDateString();
    
    const review = [userName, localStorage.getItem("restaurant"), localStorage.getItem("rating"), localStorage.getItem("comment"), localStorage.getItem("location"), date];
    const lengthOfArray = review.length;
    console.log(review);
    console.log(lengthOfArray);
    localStorage.setItem("review", review);
    //

    allReviews = allReviews.concat(review);
    console.log(allReviews);
    localStorage.setItem("allReviews", allReviews);

    //clears out the form after it's been submitted
    document.getElementById("reviewForm").reset();
  }

  async function saveReview() {
    const userName = this.getUserName();
    const restaurantEl = document.querySelector("#selectRestaurant");
    localStorage.setItem("restaurant", restaurantEl.value);
    console.log(restaurantEl);

    const ratingEl = document.querySelector("#selectRating");
    localStorage.setItem("rating", ratingEl.value);

    const commentEl = document.querySelector("#leaveComment");
    localStorage.setItem("comment", commentEl.value);

    const locationEl = document.querySelector("#leaveLocation");
    localStorage.setItem("location", locationEl.value);

    const date = new Date().toLocaleDateString();
    
    const review = [userName, localStorage.getItem("restaurant"), localStorage.getItem("rating"), localStorage.getItem("comment"), localStorage.getItem("location"), date];
    const newReview = {name: userName, restaurant: restaurantEl.value, rating: ratingEl.value, comment: commentEl.value, location: locationEl.value, date: date}
    console.log(review);
    console.log("object review");
    console.log(newReview)
    try {
      const response = await fetch('/api/review', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        //body: JSON.stringify(review),
        body: JSON.stringify(newReview),
    });
    console.log("response below");
    console.log(response);
    // Store what the service gave us
    const reviews = await response.json();
    console.log(reviews);
    console.log(JSON.stringify(reviews));
    localStorage.setItem('reviews', JSON.stringify(reviews));
  } catch {
    // If there was an error then just track locally
    allReviews = allReviews.concat(review);
    localStorage.setItem("allReviews", allReviews);
  }
  //clears out the form after it's been submitted
  document.getElementById("reviewForm").reset();
  }

  //simulates the live text feature
  //cuts it off at less than 7 so it doesn't become to huge of a list
  setInterval(() => {
    const userNumber = Math.floor(Math.random() * 900);
    const liveText = document.querySelector('.live-review-updates');
    let newInner = `<p>User${userNumber} recently left a review!</p>` + liveText.innerHTML;
    let newInnerSplit = newInner.split("</p>");
    if (newInnerSplit.length < 7) {
      liveText.innerHTML = newInner;
    }
    else {
      liveText.innerHTML = newInnerSplit.slice(0,-2).map((x) => x + `</p>`).join(``);
    }
  }, 5000);